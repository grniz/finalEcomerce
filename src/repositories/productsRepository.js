export default class productsRepository{
    constructor(dao) {
        this.dao = dao;
    };
    getProducts = () => {
        return this.dao.getProducts();
    };
    getProductById = (id) => {
        return this.dao.getProductById(id);
    };
    saveProduct = (product) => {
        return this.dao.saveProduct(product);
    };
    modifyProduct = (id,product) => {
        return this.dao.modifyProduct(id,product);
    };
    deleteProduct = (id) => {
        return this.dao.deleteProduct(id);
    };
}