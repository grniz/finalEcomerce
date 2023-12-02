import { messagesModel } from "../models/messages.model.js";

export class Messages{

    async getMessages(){
        return await messagesModel.find({}).lean({})
    }
    async createMessage(message){
        return await messagesModel.create(message)
    }
};