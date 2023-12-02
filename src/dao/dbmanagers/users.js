import { userModel } from "../models/users.model.js";

export class Users{
    
    // muestra todos los usuarios
    async getUsers(){
        return await userModel.find({});
    };    
    // busca usuarios por emails
    async getUserByEmail(email){
        return await userModel.findOne({email: email});
    };
    // buscar un usuario por ID
    async getUserById(id){
        return await userModel.findById(id);
    };
    // crea un nuevo usuario
    async createUser(user){
        return await userModel.create(user);
    };
    // modificar datos de un usuario
    async modifyUser(id,user){
        return await userModel.findByIdAndUpdate(id,user);
    };
    // eliminar un usuario 
    async deleteUser(id){
        return await userModel.findByIdAndDelete(id);
    };
};