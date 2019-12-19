import rootQueryResolvers from './root-query-resolvers';
import { cardResolver } from './type-resolvers/card-resolver';
import { typeDefs } from './type-defs';
import { SchemaGQL } from '../../schema-gql';

const typeResolvers = {
  ...cardResolver
};

const schema: SchemaGQL = {
  typeResolvers,
  rootQueryResolvers,
  typeDefs
};

export default schema;
