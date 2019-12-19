import { CardType } from '../../../../interfaces/entities/card-type';

export const cardResolver = {
  Card: {
    __resolveType(obj, context, info) {
      if (obj.type in CardType) {
        const type = CardType[obj.type];
        return type + 'Card';
      }
    }
  }
};
