import { prisma } from '../database/prismaClient.js'

export class DeleteProductControllers {
  async handle(req, res) {
    try {
      const { id } = req.params

      const product = await prisma.product.findUnique({
        where: {
          id: String(id)
        }
      })

      if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado' })
      }

      await prisma.product.delete({
        where: {
          id
        }
      })

      return res.status(200).json({ message: 'Produto deletado com sucesso' })
    } catch (error) {

      return res.status(500).json(error)
    }
  }
}