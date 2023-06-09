import { readFileSync, writeFileSync, existsSync } from 'node:fs';

export default class Cart {

    static #id = 0;
    #path;
    #carts;

    constructor() {
        this.#path = './data/carts.json';
        this.#carts = this.#leerArchivo();
        Cart.#id = this.#carts.length > 0 ? this.#carts[this.#carts.length -1].id : 0;

    }

    #leerArchivo() {
        try {
            let data;
            if (existsSync(this.#path))
                data = JSON.parse(readFileSync(this.#path, 'utf-8'));
            else
                data = [];

            return data;
        } catch (error) {
            console.log(error);
        }
    }

    createCart() {
        try {
        const newCart = { 
            id: ++Cart.#id,
            products: [],

        }
        this.#carts.push(newCart);
        writeFileSync(this.#path, JSON.stringify(this.#carts));
        return 'Carrito creado exitosamente';
        } catch (error) {
            console.log (error);
        }
    }
        getCart() {
        return this.#carts;
    }
//obtener producto por id
    getProductById(id) {
        const carritoId = this.#carts.find(p => p.id === id);

        return carritoId ? carritoId : `El carrito con ID ${id} no existe.`;
    }
}