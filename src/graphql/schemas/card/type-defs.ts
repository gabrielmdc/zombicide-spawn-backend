export const typeDefs = `
interface Card {
  number: Int!
  type: String!
}

type SziLevel {
  zombie: String!
  amount: Int!
}

type SziLevels {
  red: SziLevel
  orange: SziLevel
  yellow: SziLevel
  blue: SziLevel
}

type ActivationLevels {
  red: String
  orange: String
  yellow: String
  blue: String
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
