import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();  
export const createTweet = async(req,res) => {
    try {
        const response = await tweetService.create(req.body); 
        res.status(201).json({
            success: true, 
            message: 'successfully cretead a new tweet',
            data: response,
            err: {},

        })
    } catch (error) {
          res.status(500).json({
            success: false, 
            message: 'something went wrong',
            data: {},
            err: error,
            
        })
    }
}

export const getTweet = async(req,res)=>{
    try {
        const response = await tweetService.get(req.params.id); 
        res.status(200).json({
            success: true, 
            message: 'successfully fetched a new tweet',
            data: response,
            err: {},

        })
    } catch (error) {
          res.status(500).json({
            success: false, 
            message: 'something went wrong',
            data: {},
            err: error,
            
        })
    }
}

