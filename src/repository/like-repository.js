import Like from '../models/like'

import CrudRepository from './crud-repostiory'

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like)
    }
}

export default  LikeRepository 