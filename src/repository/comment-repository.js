import CrudRepository from "./crud-repostiory.js";
import Comment from "../models/comment.js";

class CommentRepository extends CrudRepository{
        constructor(){
            super(Comment)
        }
}

export default CommentRepository; 