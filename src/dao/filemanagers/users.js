export class Users{
    constructor(){
        this.users = []
    };

    // todos los usuarios
    async getUsers(){
        return this.users;
    };

    // busca usuarios por email
    async getUserByEmail(email){
        return this.users.find(user=>user.email === email);
    };

    // busca usuarios por ID
    async getUserById(id){
        return this.users.find(user=> user.id === +id);
    };

    // crea un nuevo usuario
    async createUser(user){
        this.users.push(user)
        this.users.forEach(user=>{
            user.id = this.users.indexOf(user)+1
        })
        return user;
    };

    // elimina un usuario
    async deleteUser(id){
       const indexUser = this.users.findIndex(user=>user.id === +id)
       if(indexUser === -1) return "User not found"
       this.users.splice(indexUser,1)
       return +id
    };
    
    // modifica un usuario
    async modifyUser(id,user){
        let indexUser = this.users.findIndex(user => user.id === +id)
        this.users[indexUser] = user
        return user;
    };
};