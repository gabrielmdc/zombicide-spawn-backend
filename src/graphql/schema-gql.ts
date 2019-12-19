import { ResolversGQL } from './resolver-gql';

export interface SchemaGQL {
  typeDefs: string;
  rootQueryResolvers: ResolversGQL;
  typeResolvers?: ResolversGQL;
}
