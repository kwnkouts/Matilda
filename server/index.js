const { find } = require('lodash');

const { GraphQLServer } = require('graphql-yoga')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/matilda2');

const component = mongoose.model('components', {
  distribution: String,
  volume: String,
  capacity: String
});

const typeDefs = `

  type component {
    _id: String
    distribution: String
    volume: String
    capacity: String
  }

  type Query {
    component(_id: String): component
    components: [component]
  }

`

const resolvers = {

  Query: {
    component: async (root, {_id}) => {
      return await component.findOne({_id})
    },

    components: async () => {
      return (await component.find())
    }
  }

}

const server = new GraphQLServer({ typeDefs, resolvers })

mongoose.connection.once('open', function() {
  // we're connected!
});

server.start(() => console.log('Server is running on localhost:4000'))
