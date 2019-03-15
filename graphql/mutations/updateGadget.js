const { GraphQLString } = require('graphql');
const gadgetGraphQLType = require('../types/gadgetType');
const Gadget = require('./../../models/gadget');

module.exports = {
  type: gadgetGraphQLType,
  args: {
    id: { type: GraphQLString},
    name: { type: GraphQLString},
    release_date: { type: GraphQLString},
    by_company: { type: GraphQLString},
    price: { type: GraphQLString},
  },
  resolve(parent, { id, name, release_date, by_company, price }) {
    return Gadget.findById(id)
      .then(gadget => {
        gadget.name = name,
        gadget.release_date = release_date,
        gadget.by_company = by_company,
        gadget.price = price;

        return gadget.save();
      })
      .then(updatedGadget => updatedGadget)
      .catch(err => console.log(err))
  }
};
