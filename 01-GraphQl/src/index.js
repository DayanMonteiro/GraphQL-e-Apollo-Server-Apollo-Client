import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID!
      name: String!
      age: Int!
      average: Float!
      married: Boolean!
      arrayString: [String]
    }
  `,
  resolvers: {
    Query: {
      id: () => '1jsj452-9-5',
      name: () => 'Dayan Monteiro',
      age: () => 30,
      average: () => 55.55,
      married: () => true,
      arrayString: () => ['A', 'B'],
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
