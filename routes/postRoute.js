const route = require('express')
const uploadPost = require('../controller/uploadPost')
const getPost = require('../controller/getPost')
const postRoute = route()
 
postRoute.post('/uploadPost',uploadPost )
postRoute.get("/getPost",getPost )

module.exports = postRoute