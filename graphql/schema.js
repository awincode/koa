const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
// const gadgetGraphQLType = require('./gadgetType_old');
// const Gadget = require('../models/gadget');

const RootQuery = require('./queries/rootQuery');
const Mutations = require('./mutations');

// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: {
//     gadget: {
//       type: gadgetGraphQLType,
//       args: { id: { type: GraphQLString }},
//       resolve(parent, { id }) {
//         return Gadget.findById(id);
//       }
//     }
//   }
// });

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});
