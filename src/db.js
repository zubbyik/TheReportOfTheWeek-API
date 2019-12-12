const mongoose = require('mongoose')

const mongo_uri = process.env.MONGOLAB_URI || 'mongodb://zubbyik:!1Winner75@ds353748.mlab.com:53748/heroku_f1t129zj'

mongoose.Promise = Promise
mongoose.connect(mongo_uri, (err, res) => {
  if (err) {
    console.log('Error connecting to mongo', err)
  } else {
    console.log('Successfully connected to mongo')
  }
})
