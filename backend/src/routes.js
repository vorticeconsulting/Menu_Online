import { Router } from 'express'
import { CreateProductControllers } from './controllers/createProductControllers.js'
import { ListProductsControllers } from './controllers/listProductControllers.js'
import { DeleteProductControllers } from './controllers/deleteProductControllers.js'

const routes = Router()

const createProduct = new CreateProductControllers
const listProduct = new ListProductsControllers
const deleteProduct = new DeleteProductControllers

routes.post('/products', createProduct.handle)
routes.get('/products', listProduct.handle)
routes.delete('/products/:id', deleteProduct.handle)

export {routes}