import { PaginationArgs } from '../../../../generics/args/pagination-args';
import { CardType } from '../../../../../interfaces/entities/card-type';

export interface FetchAllCardsByTypeArgs {
  type: CardType;
  pagination?: PaginationArgs;
}
