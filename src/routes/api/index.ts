import { FastifyInstance } from 'fastify'

export default async function (fastify: FastifyInstance) {
  fastify.get('/', ({ session, protocol, hostname }) => {
    return {
      message:
        `Hello user! See documentation at ${protocol}://${hostname}/documentation`
    }
  })
}
