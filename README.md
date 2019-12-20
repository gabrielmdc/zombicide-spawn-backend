# Zombicide Black Plague spawn cards - backend ![Build status](https://github.com/gabrielmdc/zombicide-spawn-backend/workflows/Master%20push/badge.svg)

This project offers an API where you can get all the info about the Zombicide Black Plague spawn cards.

The frontend project is [here](https://github.com/gabrielmdc/zombicide-spawn-frontend)

## Table of contents:

- [API use](#API%20use)
- [Requirements](#Requirements)
- [Installation](#Installation)
- [Docker image repositories](#Docker%20image%20repositories)
- [How to use the Docker images](#How%20to%20use%20the%20Docker%20images)
  - Pull simple image
  - Using _docker-compose_
- [License](#License)

## API use

This API uses GraphQL.
[API documentation](https://zombicide-spawn-backend.herokuapp.com/graphql)

### Query examples

Get the card 39 from the Zombicide Black Plague spawn pile:

```graphql
query {
  getCard(number: 39) {
    number
    type
    ... on SziCard {
      levels {
        red {
          zombie
          amount
        }
        orange {
          zombie
          amount
        }
        yellow {
          zombie
          amount
        }
        blue {
          zombie
          amount
        }
      }
    }
    ... on ActivationCard {
      levels {
        red {
          zombie
        }
        orange {
          zombie
        }
        yellow {
          zombie
        }
        blue {
          zombie
        }
      }
    }
  }
}
```

Get all cards of type _Necromancer_:

```graphql
query {
  fetchAllCardsByType(type: "Necromancer") {
    items {
      number
    }
  }
}
```

## Requirements

You can set-up some environment variables:

_Optional:_

- **PORT**: The server port
- **SERVER_NAME**: The server name. By default, the field _name_ from package.json is used

For the develop environment, you can add a _nodemon.json_ file which is not tracked by GIT. More info [here](https://github.com/remy/nodemon/blob/master/doc/sample-nodemon.md)

Example (_nodemon.json_):

```json nodemon.json
{
  "env": {
    "PORT": "8080",
    "SERVER_NAME": "server_name"
  }
}
```

## Using the Docker image

There are some official [repositories](#Docker%20image%20repositories).

```bash
docker pull gmdcwork/zombicide-spawn-backend:[version]
# Please set the correct variable values
docker run --name zombicide-spawn-backend-instance \
  -d zombicide-spawn-backend:[version]
```

## Installation

```bash
yarn
```

## Run

Start the application in _production_ mode:

```bash
yarn start:prod
```

The command `yarn start` is similar but it does not set the environment variable `NODE_ENV`.

## Build Docker container

You can use an [official docker image](#Docker%20image%20repositories) Docker image repositories:

```bash
yarn build
```

Now you could run a container. [Example explained](#Using%20the%20Docker%20image)

## Docker image repositories

There are two repositories:

- [Git package registry](https://github.com/gabrielmdc/zombicide-spawn-backend/packages)
- [DockerHub](https://hub.docker.com/r/gmdcwork/zombicide-spawn-backend)

## Credits

Author: [Gabriel MDC](https://github.com/gabrielmdc/)

## License

[MIT](./LICENSE)
