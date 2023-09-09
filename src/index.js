const express = require('express')
const connect = require('./config/database')
const Tweet = require('./models/tweet')
const app = express(); 

const TweetRepository = require('./repository/tweet-repository')
const Comment  = require('./models/comment')

app.listen(3000, async ()=>{
    console.log('server is running on port 3000')
    await connect(); 

    console.log('mongodb connected')
})