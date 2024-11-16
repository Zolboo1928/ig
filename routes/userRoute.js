const route = require('express')
const signUp = require('../controller/signup')
const userRoute = route()

userRoute.post('/signup', signUp)

module.exports = userRoute

