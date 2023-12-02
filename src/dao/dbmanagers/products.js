import {productsModel} from "../models/products.model.js";

export class Products{

    // todos los productos 
    async getProducts(req,res){
        const {limit = 10, page = 1, sort, query} = req.query
        const results = await productsModel.paginate(query ? {category: query} : {},{limit, page, lean: true, sort: sort ? {price:1} : {price:-1}});
        let prevLink = results.hasPrevPage ? `http://localhost:8080/productos/?page=${+page-1}&limit=${limit}&query=${query}&sort=${sort}` : null
        let nextLink = results.hasNextPage ? `http://localhost:8080/productos/?page=${+page+1}&limit=${limit}&query=${query}&sort=${sort}` : null
        results.prevLink = prevLink;
        results.nextLink = nextLink;
        return results;
    };
    
    // productos por ID
    async getProductById(id){
        return await productsModel.findById(id);
    };
    // guardar producto
    async saveProduct(product){
        return await productsModel.create(product);
    };
    // modificar producto
    async modifyProduct(id,product){
        return await productsModel.findByIdAndUpdate(id,product);
    };
    // eliminar un producto
    async deleteProduct(id){
        return await productsModel.findByIdAndDelete(id);
    };
};