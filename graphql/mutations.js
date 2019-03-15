const { GraphQLObjectType } = require('graphql');
// const { GraphQLObjectType, GraphQLString } = require('graphql');
// const gadgetGraphQLType = require('./gadgetType');
// const Gadget = require('./../models/gadget');

const addGadget = require('./mutations/addGadget');
const updateGadget = require('./mutations/updateGadget');
const removeGadget = require('./mutations/removeGadget');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addGadget,
    updateGadget,
    removeGadget
  }
  // fields: {
  //   addGadget: {
  //     type: gadgetGraphQLType,
  //     args: {
  //       name: { type: GraphQLString },
  //       release_date: { type: GraphQLString },
  //       by_company: { type: GraphQLString },
  //       price: { type: GraphQLString },
  //     },
  //     resolve(parent, args) {
  //       const { name, release_date, by_company, price } = args;

  //       const newGadget = new Gadget({
  //         name,
  //         release_date,
  //         by_company,
  //         price
  //       });

  //       return newGadget.save();
  //     }
  //   },
  //   updateGadget: {
  //     type: gadgetGraphQLType,
  //     args: {
  //       id: { type: GraphQLString},
  //       name: { type: GraphQLString},
  //       release_date: { type: GraphQLString},
  //       by_company: { type: GraphQLString},
  //       price: { type: GraphQLString},
  //     },
  //     resolve(parent, args) {
  //       const { id, name, release_date, by_company, price } = args;

  //       return Gadget.findById(id)
  //         .then(gadget => {
  //           gadget.name = name,
  //           gadget.release_date = release_date,
  //           gadget.by_company = by_company,
  //           gadget.price = price;

  //           return gadget.save();
  //         })
  //         .then(updatedGadget => updatedGadget)
  //         .catch(err => console.log(err))
  //     }
  //   },
  //   removeGadget: {
  //     type: gadgetGraphQLType,
  //     args: {
  //       id: { type: GraphQLString }
  //     },
  //     resolve(parent, { id }) {
  //       return Gadget.findByIdAndDelete(id).exec()
  //         .then(gadget => gadget.remove())
  //         .then(deletedGadget => deletedGadget)
  //         .catch(err => console.log(err))
  //     }
  //   }
  // }
});

module.exports = Mutation;