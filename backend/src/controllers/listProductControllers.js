import {prisma} from '../database/prismaClient.js'

export class ListProductsControllers {
  async handle(req, res) {
    try {
      const products = await prisma.product.findMany()

      return res.status(200).json(products)
      
    } catch (error) {
      return res.status(500).json(error)
    } 
  }
}