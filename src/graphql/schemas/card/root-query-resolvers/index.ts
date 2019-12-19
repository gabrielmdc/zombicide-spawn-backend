import { CardResolvers } from './card-resolvers';

const rootQueryResolvers: CardResolvers = {
  async fetchAllCardsByType(root, args, context) {
    const docs = await context.models.card.fetchAllByType(
      args.type,
      args.pagination
    );
    return docs;
  },
  async getCard(root, args, context) {
    const doc = await context.models.card.get(args.number);
    return doc;
  }
};

export default rootQueryResolvers;
