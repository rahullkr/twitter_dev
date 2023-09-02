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

//    const tweet = await Tweet.create({
//     content: 'third tweet', 
    
//    })
    // const tweet = await Tweet.findById('64f23e75e452fa1420eed797'); 
    // tweet.userEmail = 'dfa@d.com';b
    // await tweet.save();
    const tweetRepo = new TweetRepository() ; 
    const tweet = await tweetRepo.create({content: 'tweet with content schema'})     

    const comment = await Comment.create({content: 'new comment'}); 
    tweet.comments.push(comment); 
    await tweet.save(); 


    console.log(tweet); 
})