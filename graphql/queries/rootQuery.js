const { GraphQLObjectType } = require('graphql');
// const { GraphQLObjectType, GraphQLString } = require('graphql');
// const gadgetGraphQLType = require('./../gadgetType');
// const Gadget = require('../../models/gadget');
const queryAllGadgets = require('./queryAllGadgets');
const queryGadgetById = require('./queryGadgetById');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    queryAllGadgets,
    queryGadgetById,
  }
  // fields: {
  //   gadget: {
  //     type: gadgetGraphQLType,
  //     args: { id: { type: GraphQLString }},
  //     resolve(parent, { id }) {
  //       return Gadget.findById(id);
  //     }
  //   }
  // }
});

module.exports = RootQuery;