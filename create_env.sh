#!/bin/bash
#-----------------------------------------------------------------------------------------------------#
# Script Name: create_env.sh                                                                          #
# Date       : 2019-09-24                                                                             #
# Purpose    : Start appropriate devops tools services required for CI/CD Pipeline                    #
#            : Create environment variables file for Docker-Compose                                   #
#            : Create Variables file required for ansible playbook                                    #
#-----------------------------------------------------------------------------------------------------#

#-----------------------------------------------------#
# Logging Function                                    #
#-----------------------------------------------------#
function Echo
{
  echo
  echo `/bin/date` " ==> $1"
  echo
}

#-----------------------------------------------------#
# START DEVOPS TOOLS                                  #
#-----------------------------------------------------#
## Start the SonarQube server for code coderage
sudo su - sonaradmin -c "sh /opt/sonar/bin/linux-x86-64/sonar.sh start"
Echo "Starting the Sonar Qube Server for Code Coverage"

## Start the Nexus artifacts Repository
sudo su - nexus -c "sh /opt/nexus/bin/nexus start"
Echo "Starting the Nexus artifacts Repository"

## Start the selenium web driver
#sudo su -c "sh /root/selenium/prepare_selenium.sh"
#Echo "Starting the Selenium Web Driver"

## Prepare the docker environment
sudo su -c "sh /root/docker/docker_prepare.sh"
Echo "Prepare the Docker Environment for Jenkins job"

## Fetch Public IP Address of the Jenkins Machine"
IPADDR=`curl http://169.254.169.254/latest/meta-data/public-ipv4`

## Get JenkinsBuild no of the Jenkins Machine"
JENKINSBUILDNO=${BUILD_NUMBER}

##Port number of Nexus artifacts Repository
NEXUSPORT=8085

## Set Docker Image Name required for Nexus Repository and add to environment file for docker
DOCKERIMAGENAME=${IPADDR}:${NEXUSPORT}/sowtracker:${JENKINSBUILDNO}
echo "DOCKERIMAGENAME=${IPADDR}:${NEXUSPORT}/sowtracker:${JENKINSBUILDNO}" > .env
Echo "Setting Docker Image Name required for Nexus Repository"

## Create variables file for ansible Playbook
echo "---" > vars.yml
echo "dockerimage: ${DOCKERIMAGENAME}" >> vars.yml
echo "prv_reg_add: ${IPADDR}:${NEXUSPORT}" >> vars.yml
echo "nexus_user: admin" >> vars.yml
echo "nexus_secret: nexusadmin" >> vars.yml
Echo "Creating Variables file for Ansible Playbook"

sed -e "s/public_ip/${IPADDR}/g" ansiserver.dat > ansiserver
Echo "Creating Inventory file with IP Address of DockerHost"

Echo "Script create_env.sh exiting successfully"

exit 0
