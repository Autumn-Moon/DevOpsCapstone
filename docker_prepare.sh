#!/bin/bash
#-----------------------------------------------------------------------------------------------------#
# Script Name: docker_prepare.sh                                                                      #
# Date       : 2019-09-24                                                                             #
# Purpose    : Add the address of insecure registry to /etc/docker/daemon.json                        #
#            : Login to Nexus Private registry using docker login so that the config.json             #
#              file in /root/.docker will have the authorized keys added                              #
#            : Change Ownership of docker socket file to jenkins                                      #
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
# MAIN                                                #
#-----------------------------------------------------#

#Fetch Current Public IP Address of the machine
IPADDR=`curl http://169.254.169.254/latest/meta-data/public-ipv4`

##To use nexus registry over an unencrypted HTTP connection
##Add the address of insecure registry to /etc/docker/daemon.json
cat <<EOF > /etc/docker/daemon.json
{
 "insecure-registries": ["${IPADDR}:8085"],
 "disable-legacy-registry": true
}
EOF
Echo "Adding address of insecure registry to Docker Daemon file"

##Restart Docker for the changes to take effect
service docker restart
Echo "Docker Service Restarted"

#Add Authorized keys to config.json in Docker
docker login -u admin -p nexusadmin ${IPADDR}:8085
cat /root/.docker/config.json
Echo "Adding Authorized keys to Nexus Registry Successful"

##jenkins communicates with the local Docker daemon through the /var/run/docker.sock
##So Change the ownership of the file to enable communication
chown -R jenkins:docker /var/run/docker.sock
Echo "Changing Ownership of docker socket file Successful"

exit 0
