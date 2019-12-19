import { GraphqlContext } from '../../../graphql-context';
import { FetchAllCardsByTypeArgs } from './args/fetch-all-cards-by-type-args';
import { GetCardArgs } from './args/get-card-args';
import { Card } from '../../../../interfaces/entities/card';
import { CardsPagedData } from '../../../../models/card/cards-paged-data';
import { ResolversGQL } from '../../../resolver-gql';

export interface CardResolvers extends ResolversGQL {
  fetchAllCardsByType(
    root: any,
    args: FetchAllCardsByTypeArgs,
    context: GraphqlContext
  ): Promise<CardsPagedData>;
  getCard(root: any, args: GetCardArgs, context: GraphqlContext): Promise<Card>;
}
