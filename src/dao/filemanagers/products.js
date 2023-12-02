export class Products{
    constructor(){
        this.products = []
    };    
    // muestra todos los productos
    async getProducts(req,res){
        return this.products
    };
    // busca productos por ID
    async getProductById(id){
        return this.products.find(p=>p._id === +id)
    };
    // guarda un producto
    async saveProduct(product){
        this.products.push(product)
        this.products.forEach(p=>{
            p._id = this.products.indexOf(p)+1
        })
        return product;
    };
    // modifica un producto
    async modifyProduct(id,product){
        let indexProduct = this.products.findIndex(p=>p._id === +id)
        const quantity = this.products[indexProduct].quantity
        if(indexProduct === -1) return "Product not found"
        product.quantity = quantity
        this.products[indexProduct] = product
        return product
    };
    // elimina un producto
    async deleteProduct(id){
        let product = this.products.find((p) => p._id === +id)
        if(product){
            let indexProduct = this.products.indexOf(product)
            this.products.splice(indexProduct,1)
            this.products.forEach(p=>{
                p.id = this.products.indexOf(p)+1
            })
            return id
        }else{
            return "Product not found"
        }
    };
};