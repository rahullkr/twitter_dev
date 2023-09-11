const {TweetRepository, HashtagRepository} = require('../repository/index')

class TweetService{

    constructor(){
        this.tweetRepository = new TweetRepository(); 
        this.HashtagRepository = new HashtagRepository(); 
    }

    async create(data){
        const content = data.content; 
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag)=> tag.substring(1));

        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.HashtagRepository.findByName(tags);
        let titleOfPresenttags = alreadyPresentTags.map((tags) => tags.title); 
        let newTags = tags.filter(tag=> !titleOfPresenttags.includes(tag));  
        newTags = newTags.map(tag =>{
            return {
                title: tag, 
                tweets : [tweet.id]
            }
        })

        const response = await this.HashtagRepository.bulkCreate(newTags); 
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        });
        console.log(response)

        return tweet; 
    }
}

module.exports = TweetService; 
