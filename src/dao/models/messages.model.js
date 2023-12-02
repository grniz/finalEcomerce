import mongoose from "mongoose";

const messagesCollection = "messages"

const messagesSchema = new mongoose.Schema({
    username : {
        type : String,
        require : true
    },
    message : String
})

export const messagesModel = mongoose.model(messagesCollection,messagesSchema)
