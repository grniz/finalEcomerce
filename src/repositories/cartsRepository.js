export default class cartsRepository{
    constructor(dao) {
        this.dao = dao;
    };
    getCartById = (id) => {
        return this.dao.getCartById(id);
    };
    saveCart = (cart) => {
        return this.dao.saveCart(cart);
    };
    saveProductCart = (cid,pid) => {
        return this.dao.saveProductCart(cid,pid);
    };
    deleteProductCart = (cid,pid) => {
        return this.dao.deleteProductCart(cid,pid);
    };
    updateCart = (id,data) => {
        return this.dao.updateCart(id,data);
    };
    updateQuantityProductsCart = (cid,pid,quantity) => {
        return this.dao.updateQuantityProductsCart(cid,pid,quantity);
    };
    deleteProductsCart = (cid) => {
        return this.dao.deleteProductsCart(cid);
    };



}