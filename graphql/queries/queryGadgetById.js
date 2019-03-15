const { GraphQLString } = require('graphql');
const gadgetGraphQLType = require('../types/gadgetType');
const Gadget = require('../../models/gadget');

module.exports = {
  type: gadgetGraphQLType,
  args: { id: { type: GraphQLString }},
  resolve(parent, { id }) {
    return Gadget.findById(id);
  }
}