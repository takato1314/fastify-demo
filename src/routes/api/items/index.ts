import {
  FastifyPluginAsyncTypebox
} from '@fastify/type-provider-typebox'
import {
  getItems,
  addItem,
  updateItem,
  deleteItem,
  getItemById,
  Item
} from '../../../db/item.db.js'

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.get('/items', async () => getItems())

  fastify.get('/items/:id', async (request) => {
    const id = request.params as number
    const item = getItemById(id)
    if (!item) {
      return { error: 'Item not found' }
    }
    return item
  })

  fastify.post('/items', async (request) => {
    const body = request.body
    if (Array.isArray(body)) {
      // Bulk add
      for (const item of body as Item[]) {
        await addItem(item)
      }
      return { message: 'Items added', count: body.length }
    } else {
      // Single add
      const item = body as Item
      await addItem(item)
      return { message: 'Item added' }
    }
  })

  fastify.put('/items/:id', async (request) => {
    const { id } = request.params as any
    const { name } = request.body as any
    updateItem(Number(id), name)
    return { message: 'Item updated' }
  })

  fastify.delete('/items/:id', async (request) => {
    const { id } = request.params as any
    deleteItem(Number(id))
    return { message: 'Item deleted' }
  })
}

export default plugin
