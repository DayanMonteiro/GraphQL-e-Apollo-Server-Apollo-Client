import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'a1s2d3f487',
          userName: 'Dayan Monteiro',
        };
      },
      users: () => {
        return [
          {
            id: 'a1s2d3f487',
            userName: 'Dayan Monteiro',
          },
          {
            id: 'b154e2ff487',
            userName: 'Laryssa Viana',
          },
          {
            id: 'c154e3gm487',
            userName: 'Pietra Viana Monteiro',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
