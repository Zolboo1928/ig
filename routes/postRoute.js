const route = require('express')
const uploadPost = require('../controller/uploadPost')
const getPost = require('../controller/getPost')
const addComment = require('../controller/comment')
const getComments = require('../controller/getComments.js')
const getPostById = require('../controller/getPostById.js')
const postRoute = route()
 
postRoute.post('/uploadPost',uploadPost )
postRoute.post("/comment", addComment)
postRoute.get("/getPosts",getPost )
postRoute.get("/getComments", getComments)
postRoute.get('/getPostById',getPostById)

module.exports = postRoute


