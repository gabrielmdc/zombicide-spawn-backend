export const typeDefs = `
interface Card {
  number: Int!
  type: String!
}

type SziLevel {
  zombie: String!
  amount: Int!
}

type ActivationLevel {
  zombie: String!
}

type SziLevels {
  red: SziLevel
  orange: SziLevel
  yellow: SziLevel
  blue: SziLevel
}

type ActivationLevels {
  red: ActivationLevel
  orange: ActivationLevel
  yellow: ActivationLevel
  blue: ActivationLevel
}

type SziCard implements Card {
  number: Int!
  type: String!
  levels: SziLevels!
}

type ActivationCard implements Card {
  number: Int!
  type: String!
  levels: ActivationLevels!
}

type DoubleSpawnCard implements Card {
  number: Int!
  type: String!
}

type NecromancerCard implements Card {
  number: Int!
  type: String!
}

type FetchCardsResult {
  items: [Card!]!
  pagination: Pagination!
  byType: String!
}

extend type RootQuery {
  fetchAllCardsByType(type: String!, pagination: PaginationRequest): FetchCardsResult!
  getCard(number: Int!): Card!
}
`;
