//imports
import express from 'express';
import ProductManager from "./productos.js";

//constantes
const app = express ();
const port = 8080;
const productos = new ProductManager('./data/productos.json');

//inicio en localhost
app.get ('/', function (req, res) {
    return res.send('home')
});

//pedido de /products
app.get ('/products', (req, res) => {
    const {limit} = req.query;
    const p = productos.getProduct();
    let cantProductos;
    if (limit)
            cantProductos = p.slice(0, limit)
    else
            cantProductos = p; 

    return res.json({cantTotal : p.length, productos: cantProductos});
});
//obtener productos por id
app.get ('/products/:id', (req, res) => {
    const { id } = req.params
    return res.json(productos.getProductById (parseInt(id)))
})

//mensaje de puerto en uso
app.listen(port, () => {
    console.log(`corriendo servidor en puerto ${port}`)
});