const {Schema, model} = require('mongoose')

const todosSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
  }
})

module.exports = model('Todos', todosSchema)
