import {cartsModel} from "../models/carts.model.js";
import {productsModel} from "../models/products.model.js";


export class Carts{
    
    // carritos por ID
    async getCartById(id){
        return await cartsModel.findById(id).lean({})
    }
    // guardar carrito
    async saveCart(cart){
       return await cartsModel.create(cart) 
    }

    // agregar producto al cartito
    async saveProductCart(cid,pid){
        let carrito = await cartsModel.findById(cid)
        const productoEnCarrito = carrito.products.find(product => product.product.id === pid);
        if (carrito) {
            if (productoEnCarrito) {
                const product = await PRODUCTS_MODEL.findById(pid)
                product.quantity++
                let result = await product.save()
                return result
            } else { 
                const product = await PRODUCTS_MODEL.findById(pid)
                product.quantity = 1
                let result = await product.save()
                carrito.products.push({
                    product: product.id,
                });
            }
            const result = await carrito.save();
            return result
        } else {
            return "Cart not found";
        }
    }

    // eliminar producto del carrito
    async deleteProductCart(cid,pid){
            const carrito = await cartsModel.findById(cid)
            const indexProduct = carrito.products.findIndex(p=> p.product.id == pid)
            if(indexProduct !== -1){
                carrito.products.splice(indexProduct,1)
                await carrito.save()
                return carrito
            }else{
                return "Cart not found"
            }
    }

    // actualizar productos del carrito
    async updateCart(id,data){
        const carrito = await cartsModel.findById(id)
        if(carrito){
            carrito.products = data
            carrito.save()
            return carrito
        }else{
            return "Cart not found"
        }
    }

    async updateQuantityProductsCart(cid,pid,quantity){
             const carrito = await cartsModel.findById(cid)
             const productoEnCarrito = carrito.products.findIndex(c => c.product.id === pid)
             if(carrito){
                if(productoEnCarrito !== -1){
                    const product = await PRODUCTS_MODEL.findById(pid)
                    product.quantity = quantity
                    await product.save()
                    return carrito
                 }else{
                    return "Product not found"
                 }
             }else{
                return "Cart not found"
             }
    }
    
    // eliminar productos del carrito
    async deleteProductsCart(cid){
         const carrito = await cartsModel.findById(cid)
         if(carrito){
            carrito.products = []
            await carrito.save()
            return carrito
         }else{
            return "Cart not found"
         }
    }
};