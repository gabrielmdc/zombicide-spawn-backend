import { Model } from '../model';
import { cardRepository } from './repository';
import { PaginationRequest } from '../../lib/pagination/request';
import { CardType } from '../../interfaces/entities/card-type';
import { CardsPagedData } from './cards-paged-data';
import { validateNumber, validateType } from '../../validation/card';

export class CardModel implements Model {
  async fetchAllByType(type: CardType, paginationRequest?: PaginationRequest) {
    await validateType(type);
    const docs = await cardRepository.fetchAllByType(type, paginationRequest);
    const pagedData: CardsPagedData = {
      ...docs,
      byType: type
    };
    return pagedData;
  }

  async get(number: number) {
    await validateNumber(number);
    const doc = await cardRepository.find(number);
    return doc;
  }
}
