#!/bin/bash 
PATH_PROJECT=$(pwd)

# help to run app 
ionic build

npx cap copy

npx cap open android