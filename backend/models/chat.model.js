import mongoose from 'mongoose' ;
const chatSchema = new mongoose.Schema({
    sender : {
        type : mongoose.Schema.Types.ObjectId ,
        ref  :"User" , 
        required : true ,

    } , 
    receiver : {
        type : mongoose.Schema.Types.ObjectId ,
        ref  :"User" , 
        required : true ,
    } , 
    lastMessage : {
        type : String 

    }
} ,{timestamps : true }) ;
const Chat =  mongoose.model('Chat' , chatSchema) ; 
export {Chat} ;
