import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'
import PersonType from './person.type';
import RootQuery from './rootquery.type';
import RootMutation from './rootmutation.type';


const SchemaDefinition = `
  schema {
    query: RootQuery,
    mutation: RootMutation
  }
`;

const schema = makeExecutableSchema({
  // Add the type definitions to the schema
  typeDefs: [
    SchemaDefinition,
    RootQuery,
    RootMutation,
    PersonType,
  ],
  // performs field lookups for a specific type
  resolvers
});


export default schema;