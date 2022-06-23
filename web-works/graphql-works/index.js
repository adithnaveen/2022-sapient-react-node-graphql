const { ApolloServer, gql } = require("apollo-server");


const typeDefs = gql`

    type Programming {
        id: ID!, 
        date : String!, 
        typeOfProgramming: String!,
        domain: Domain!
    }

    enum Domain {
        FINANCE
        INSURANCE
        BANKING 
        RETAIL
    }

    type Query {
        totalDays: Int!, 
        allPrograms: [Programming!]!
    }
`;

// are the functions which return data to the schema
const resolvers = {}

const server = new ApolloServer({ typeDefs, mocks: true });

server.listen(3000, () => {
    console.log("Server started at 3000");
}); 