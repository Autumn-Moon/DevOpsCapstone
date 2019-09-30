#!/bin/bash
#-----------------------------------------------------------------------------------------------------#
# Script Name: docker_push.sh                                                                         #
# Date       : 2019-09-24                                                                             #
# Purpose    : Push Docker Image to Nexus Repository                                                  #
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

NEXUSPORT=8085
IPADDR=`curl http://169.254.169.254/latest/meta-data/public-ipv4`
DOCKERIMAGENAME=${IPADDR}:${NEXUSPORT}/sowtracker:${JENKINSBUILDNO}

docker login -u admin -p nexusadmin ${IPADDR}:8085
Echo "Docker Login to Nexus Repository"

echo $DOCKERIMAGENAME

docker push ${DOCKERIMAGENAME}
Echo "Pushing Docker Image to Nexus Repository"

exit 0
