import { CardRepository } from './card-repository';
import { CardJsonRepository } from './card-json-repository';

export const cardRepository: CardRepository = new CardJsonRepository();
