export default class userRepository{
    constructor(dao) {
        this.dao = dao;
    };
    getUsers = () => {
        return this.dao.getUsers();
    };
    getUserByEmail = (email) => {
        return this.dao.getUserByEmail(email);
    };
    getUserById = (id) => {
        return this.dao.getUserById(id);
    };
    createUser = (user) => {
        return this.dao.createUser(user);
    };
    modifyUser = (id,user) => {
        return this.dao.modifyUser(id,user);
    };
    deleteUser = (id) => {
        return this.dao.deleteUser(id);
    };
}