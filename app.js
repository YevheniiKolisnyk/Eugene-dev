const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const keys = require('./keys/keys')
const bodyParses = require('body-parser')
const contactRoute = require('./routes/contact')
const todoRoute = require('./routes/todo')

mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
    .then(() => {console.log('mongoDB connected')})
    .catch(error => {console.log(error)})
mongoose.set('useFindAndModify', false);

app.use(bodyParses.urlencoded({extended: true}))
app.use(bodyParses.json())
app.use('/api/contact', contactRoute)
app.use('/api/todo', todoRoute)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist/client'))

  app.get('*', (req, res) => {
    res.sendFile(
        path.resolve(__dirname, 'client', 'dist', 'client', 'index.html')
    )
  })
}

module.exports = app
