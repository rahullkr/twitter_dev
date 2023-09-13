import Like from '../models/like.js'

import CrudRepository from './crud-repostiory.js'

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }
    async findByUserAndLikeable(data){
        try {
            const like = await Like.findOne(data);
          return like; 
        } catch (error) {
            throw new Error('unknonw')
            
        }
    }
}
export default  LikeRepository ;