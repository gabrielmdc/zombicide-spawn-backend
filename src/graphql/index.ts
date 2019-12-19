import * as restify from 'restify';
import * as graphqlHTTP from 'express-graphql';
import { customFormatErrorFn, buildExecutableSchema } from './helpers';
import cardSchema from './schemas/card';
import { SchemaGQL } from './schema-gql';
import { Server } from '../config';
import { getModels } from '../models';

// Add all the squemas
const schemasGQL: SchemaGQL[] = [cardSchema];

const schema = buildExecutableSchema(schemasGQL);

export function setApiRoute(server: restify.Server, mainPath: string = '') {
  // Allow OPTION requests
  server.opts(mainPath, (req, res, next) => {
    res.send(200);
    return next();
  });
  server.post(
    mainPath,
    graphqlHTTP(req => {
      return {
        schema,
        customFormatErrorFn,
        context: {
          req,
          models: getModels()
        }
      };
    })
  );
  if (Server.ENVIRONMENT === 'production') {
    return;
  }
  server.get(
    mainPath,
    graphqlHTTP({
      graphiql: true,
      schema,
      customFormatErrorFn
    })
  );
}
