import { Card } from '../../interfaces/entities/card';
import { PagedData } from '../../lib/pagination/paged-data';
import { CardType } from '../../interfaces/entities/card-type';

export interface CardsPagedData extends PagedData<Card> {
  byType: CardType;
}
