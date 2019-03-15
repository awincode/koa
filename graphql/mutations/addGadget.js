const { GraphQLString } = require('graphql');
const gadgetGraphQLType = require('../types/gadgetType');
const Gadget = require('./../../models/gadget');

module.exports = {
  type: gadgetGraphQLType,
  args: {
    name: { type: GraphQLString },
    release_date: { type: GraphQLString },
    by_company: { type: GraphQLString },
    price: { type: GraphQLString },
  },
  resolve(parent, { name, release_date, by_company, price }) {
    const newGadget = new Gadget({
      name,
      release_date,
      by_company,
      price
    });

    return newGadget.save();
  }  
};
