const ProductManager = require("./product_manager")

const manager = new ProductManager('products.json')

(async () => {
    await manager.addProduct({
        name: 'Wine',
        price: 150
    })

    console.log(await manager.getProducts())

    await manager.updateProduct(2, {
        name: 'Beer',
        price: 120
    })
    
})()