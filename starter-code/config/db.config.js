const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/starter-code'

mongoose.connect(MONGODB_URI,{useNewUrlParser:true})
  .then(`Successfully connected to database ${MONGODB_URI}`)
  .catch(error => `An error occurred while trying to connect to database ${MONGODB_URI}`)
  