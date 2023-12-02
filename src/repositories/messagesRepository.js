export default class messageRepository{
    constructor(dao) {
        this.dao = dao;
    };
    getMessages = () =>{
        return this.dao.getMessages();
    };
    createMessage = (message) => {
        return this.dao.createMessage(message);
    };
};