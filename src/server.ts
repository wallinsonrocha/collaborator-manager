import fastify, { FastifyInstance } from 'fastify'
import { userRoutes } from './modules/routes/userRoutes';

const app: FastifyInstance = fastify({logger: true});

// Registrar rotas de user
app.register(userRoutes, {
    prefix: '/users'
});

export {app}