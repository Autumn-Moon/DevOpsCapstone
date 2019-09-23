#!/bin/bash
IPADDR=`curl http://169.254.169.254/latest/meta-data/public-ipv4`
JENKINSBUILDNO=${BUILD_NUMBER}
NEXUSPORT=8085
echo "DOCKERIMAGENAME=${IPADDR}:${NEXUSPORT}/sowtracker:${JENKINSBUILDNO}" > .env
