
import express from 'express';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';



// Initialize the app
const app = express();

// GraphQL Schema is imported here
const graphQLSchema = schema

app.use('*', cors({
  origin: '*'
}))

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: graphQLSchema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
  console.log('Listening on http://localhost:3000/')
  console.info('GraphQL endpoint: http://localhost:3000/graphql')
  console.info('GraphQL console: http://localhost:3000/graphiql')
});

process.on('SIGUSR2', () => { process.exit(0); });
