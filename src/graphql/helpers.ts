import { GraphQLError } from 'graphql/error/GraphQLError';
import { GraphqlCustomError } from './graphql-custom-error';
import { GraphqlCustomErrorName } from './graphql-custom-error-name';
import { SchemaGQL } from './schema-gql';
import { makeExecutableSchema } from 'graphql-tools/dist/makeExecutableSchema';
import { genericTypeDefs } from './generics/type-defs';

export function customFormatErrorFn(err: GraphQLError) {
  if (!err.originalError) {
    const customError = <GraphqlCustomError>{
      code: GraphqlCustomErrorName,
      message: err.message,
      path: err.path
    };
    return customError;
  }
  const customError = <GraphqlCustomError>{
    code: err.originalError.name || GraphqlCustomErrorName,
    message: err.originalError.message,
    path: err.path
  };
  return customError;
}

export function buildExecutableSchema(schemasGQL: SchemaGQL[]) {
  // Concat all typeDefs
  const typeDefs: string =
    schemasGQL.map(s => s.typeDefs).reduce((acc, e) => acc + e, '') +
    genericTypeDefs;

  // Concat all query resolvers
  const rootQueryResolvers = schemasGQL
    .map(q => q.rootQueryResolvers)
    .reduce((acc, e) => ({ ...acc, ...e }));

  // Concat all type resolvers
  const typeResolvers = schemasGQL
    .map(q => q.typeResolvers)
    .reduce((acc, e) => ({ ...acc, ...e }));

  // Add all the resolvers
  const resolvers = {
    RootQuery: {
      ...rootQueryResolvers
    },
    ...typeResolvers
  };
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });
  return schema;
}
