import { CardModel } from './card';
import { Models } from './models';

export function getModels() {
  const models: Models = {
    card: new CardModel()
  };
  return models;
}
