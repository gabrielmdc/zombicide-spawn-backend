import { CardRepository } from './card-repository';
import { CardType } from '../../../interfaces/entities/card-type';
import { Card } from '../../../interfaces/entities/card';
import * as sziData from '../../../data/szi.json';
import * as doubleSpawnData from '../../../data/double-spawn.json';
import * as activationData from '../../../data/activation.json';
import * as necromancerData from '../../../data/necromancer.json';
import { PagedData } from '../../../lib/pagination/paged-data';
import { PaginationRequest } from '../../../lib/pagination/request';

const sources = {
  [CardType.Activation]: activationData,
  [CardType.DoubleSpawn]: doubleSpawnData,
  [CardType.Necromancer]: necromancerData,
  [CardType.Szi]: sziData
};

const defaultPagination: PaginationRequest = {
  limit: 10
};

export class CardJsonRepository implements CardRepository {
  private static getTypeFromNumber(number: number) {
    if (number < 37) {
      return CardType.Szi;
    }
    if (number < 41) {
      return CardType.Activation;
    }
    if (number < 47) {
      return CardType.Necromancer;
    }
    return CardType.DoubleSpawn;
  }

  async fetchAllByType(type: CardType, paginationRequest?: PaginationRequest) {
    const paginationReq = paginationRequest || defaultPagination;
    const cards = <Card[]>sources[type];
    const pagLimit =
      paginationReq.limit > cards.length ? cards.length : paginationReq.limit;
    const pages = Math.ceil(cards.length / pagLimit);
    const pagNumber =
      paginationReq.page && paginationReq.page > pages
        ? pages
        : paginationReq.page;
    const indexFrom = (pagNumber - 1) * pagLimit;
    const indexTo = indexFrom + pagLimit;
    const items = cards.slice(indexFrom, indexTo);
    const total = items.length;
    const pagedData: PagedData<Card> = {
      items,
      pagination: {
        limit: pagLimit,
        page: pagNumber,
        pages,
        total
      }
    };
    return pagedData;
  }

  async find(number: number) {
    const cardType = CardJsonRepository.getTypeFromNumber(number);
    const source = <Card[]>sources[cardType];
    const card = source.find(c => c.number === number);
    return card;
  }
}
