import { LikeRepository, TweetRepository } from "../repository/index.js";
class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async toggleLike(modelId, modelType, userId) {
    if (modelType == "Tweet") {

      var likeable = await this.tweetRepository.get(modelId);
      likeable.populate({ path: "likes" });

      console.log(likeable.likes);
    } 
    else if (modelType == "Comment") {

      var likeable = await this.tweetRepository
        .getWithComments(modelId)
        .populate({ path: "likes" });
    } 
    else {
      throw new Error("unknown model type");
    }

    const exists = await this.likeRepository.findByUserAndLikeable({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });

    console.log('exists', exists);
    if (exists) {
      likeable.likes.pull(exists.id);
      await likeable.save();
       await exists.remove();
    //   console.log(one);
      var isAdded = false;
    } 
    else {
      const newLike = await this.likeRepository.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });

      likeable.likes.push(newLike);
      await likeable.save();
      var isAdded = true;
    }

    return isAdded;
  }
}

export default LikeService;
