//carts

import { Router } from 'express';
import Cart from '../models/carts.js'
const router = Router();
const cart = new Cart()

//carritos completos
router.get ('/', (req, res) => {
    const result = cart.getCarts();
    return res.json({msg:'GET carts'})
})
//particular
router.get ('/:id', (req, res) => {
    const result = cart.getCartById(parseInt(req.params.id));
    return res.json({result})
})
//agregar productos  metodo POST
router.post ('/', (req, res) => {
    return res.json({result})
})
//agregar productos  metodo POST
router.post ('/:id/product/:pid', (req, res) => {
    return res.json({msg:'POST carts'})
})

//exports
export default router;