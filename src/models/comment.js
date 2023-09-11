import mongoose from 'mongoose'


const commentSchena = new mongoose.Schema({
  content: {
    type: String, 
    required: true,
  }, 
  userEmail: {
        type: String
  }, 

}, {timestamps: true})

const Comment = mongoose.model('Comment', commentSchena); 
export default Comment;