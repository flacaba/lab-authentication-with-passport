const mongoose = require('mongoose')
const User = require('../models/user')

module.exports.register = (req,res,next) => {
  res.render('auth/register')
}