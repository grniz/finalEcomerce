export class Message{
    constructor(){
        this.messages = []
    };
    async getMessages(){
        return this.messages
    };
    async createMessage(message){
        this.messages.push(message)
        this.messages.forEach(message=>{
            message.id = this.messages.indexOf(message)+1
        })
        return message
    };
};