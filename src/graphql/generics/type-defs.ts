export const genericTypeDefs = `
input PaginationRequest {
  limit: Int!
  page: Int
}

type Pagination {
  limit: Int!
  page: Int!
  total: Int!
  pages: Int!
}

type RootQuery

schema {
  query: RootQuery
}
`;
