#!/bin/bash
#-----------------------------------------------------------------------------------------------------#
# Script Name: prepare_selenium.sh                                                                    #
# Date       : 2019-09-24                                                                             #
# Purpose    : Start Selenium Web Driver                                                              #
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

## Assign the webdriver path
webdriver_path=/root/selenium/node_modules/protractor/node_modules
cd ${webdriver_path}

## Clear out the server and driver files.
node webdriver-manager clean

## Kill Selenium process if it is already running
kill -9 `ps -ef | grep selenium | grep 4444 | awk '{print $2}'`
Echo "Killing Selenium process if it is already running Completed"

## Run Websriver update
node webdriver-manager update --versions.chrome=$(google-chrome-stable --version | cut -d ' ' -f 3) --gecko false
Echo "Webdriver-manager update completed successfully"

node webdriver-manager start --detach
Echo "Starting Selenium Web Driver Completed successfully"

exit 0
