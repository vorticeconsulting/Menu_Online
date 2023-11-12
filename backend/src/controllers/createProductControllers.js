import {prisma} from '../database/prismaClient.js'

export class CreateProductControllers {
  async handle(req, res) {
    try {
      const {title, price} = req.body

      await prisma.product.create({
        data: {
          title,
          price
        }
      })
      
      return res.status(200).json({message: 'Produto adicioado com sucesso'})

    } catch (error) {
      return res.status(500).json(error)
    }
  }
}