import { Repository } from '../../../lib/repository';
import { Card } from '../../../interfaces/entities/card';
import { PagedData } from '../../../lib/pagination/paged-data';
import { PaginationRequest } from '../../../lib/pagination/request';
import { CardType } from '../../../interfaces/entities/card-type';

export interface CardRepository extends Repository<Card> {
  find(number: number): Promise<Card>;
  fetchAllByType(
    type: CardType,
    paginationRequest?: PaginationRequest
  ): Promise<PagedData<Card>>;
}
