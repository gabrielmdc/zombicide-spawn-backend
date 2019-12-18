# my-project backend ![Build status](https://github.com/gabrielmdc/my-project-backend/workflows/Master%20push/badge.svg)

This project is the backend of the project my-project, it saves the historical and configuration of my-project system.

## Table of contents:

- [Requirements](#Requirements)
- [Installation](#Installation)
- [Docker image repositories](#Docker%20image%20repositories)
- [How to use the Docker images](#How%20to%20use%20the%20Docker%20images)
  - Pull simple image
  - Using _docker-compose_
- [License](#License)

## Requirements

You must to set-up some environment variables:

_Mandatory:_

- **DATABASE_URI**: The URI of MongoDb instance
- **GOOGLE_CLIENT_ID**: This is used for the Google authentication
- **GOOGLE_CLIENT_SECRET**: This is used for the Google authentication
- **GOOGLE_REDIR_URL**: This is used for the Google authentication
- **SECURITY_JWT_SECRET**: This is used to encrypt the JWT Token

_Optional:_

- **SECURITY_BCRYPT_SALT_ROUNDS**: An integer used for encrypt data
- **PORT**: The server port
- **SERVER_NAME**: The server name. By default, the field _name_ from package.json is used
- **DATABASE_URI_TEST**: The URI of MongoDb instance. Used only for unit testing

For the develop environment, you can add a _nodemon.json_ file which is not tracked by GIT. More info [here](https://github.com/remy/nodemon/blob/master/doc/sample-nodemon.md)

Example (_nodemon.json_):

```json nodemon.json
{
  "env": {
    "DATABASE_URI": "mongo db url",
    "GOOGLE_CLIENT_ID": "xxx",
    "GOOGLE_CLIENT_SECRET": "xxx",
    "GOOGLE_REDIR_URL": "redir url",
    "SECURITY_JWT_SECRET": "xxx"
  }
}
```

## Using the Docker image

There are some official [repositories](#Docker%20image%20repositories).

```bash
docker pull gmdcwork/my-project-backend:[version]
# Please set the correct variable values
docker run --name my-project-backend-instance \
  -e DATABASE_URI='mongodb://mongo/my-backend' \
  -e GOOGLE_CLIENT_ID="" \
  -e GOOGLE_CLIENT_SECRET="" \
  -e GOOGLE_REDIR_URL="" \
  -e SECURITY_JWT_SECRET="" \
  -d my-project-backend:[version]
```

## Installation

```bash
yarn install
```

## Run

Start the application in _production_ mode:

```bash
yarn start:prod
```

The command `yarn start` is similar but it does not set the environment variable `NODE_ENV`.

## Build Docker container

## Docker image repositories

## Credits

Author: [Gabriel MDC](https://github.com/gabrielmdc/)

## License

[MIT](./LICENSE)
