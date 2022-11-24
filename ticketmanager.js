class ProductManager {

    constructor(products) {
        this.products = []
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }


// Método que devuelve el array con todos los productos creados.
    getProducts = () => {return this.products}


// Método para agregar un producto al array de productos inicial.
    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            title: "producto prueba",
            description: "Este es un producto prueba",
            price: 200,
            thumbnail: "Sin imagen",
            code: "abc123",
            stock: 25
        }
        this.products.push(product)
    }

    getProducts()


// Método para buscar en el array el producto que coincida con el ID.
    getProductByID = () => {
        const count = this.products.length

        if (count > 0) {
            const lastProduct = this.products[count-1]
            const id = lastProduct.id + 1
            return id
        } else {
            console.log("Not found")
        }
    }
    
}