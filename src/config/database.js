import mongoose from 'mongoose'
mongoose.set('strictQuery', true);
export const connect = async () =>{
    await mongoose.connect('mongodb://127.0.0.1:27017/twiiter_dev');

}

