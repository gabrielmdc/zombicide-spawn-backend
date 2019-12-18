#!/bin/bash

if [[ -z $GITHUB_REGISTRY_USER || -z $GITHUB_REGISTRY_TOKEN ]]; then
    echo "ERROR: the environment variables 'GITHUB_REGISTRY_USER' and 'GITHUB_REGISTRY_TOKEN' must be defined"
    exit 1;
fi
PACKAGE_VERSION=$(node -e "console.log(require('./package.json').version)")
VERSION=$(cut -d '.' -f1,2 <<< $PACKAGE_VERSION)
echo "GitHub Package Registry login..."
docker login docker.pkg.github.com -u $GITHUB_REGISTRY_USER --password-stdin <<< $GITHUB_REGISTRY_TOKEN &&
echo "Tagging..." &&
docker tag zombicide-spawn-backend-backend:$VERSION docker.pkg.github.com/gabrielmdc/zombicide-spawn-backend-backend/zombicide-spawn-backend-backend:$VERSION
echo "Pushing image into GitHub Package Registry..." &&
docker push docker.pkg.github.com/gabrielmdc/zombicide-spawn-backend-backend/zombicide-spawn-backend-backend:$VERSION
