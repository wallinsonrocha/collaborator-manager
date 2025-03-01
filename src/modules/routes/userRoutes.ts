import { FastifyInstance } from "fastify";
import { UserUseCase } from "../usecases/user.usecase";
import { UserCreate } from "../interfaces/user.interface";

export async function userRoutes(fastify: FastifyInstance){
    const userUseCase = new UserUseCase();
    
    fastify.post<{Body: UserCreate}>("/", (request, reply)=>{
        const {name, email, password} = request.body;
        try{
            const data = userUseCase.create({
                name,
                email,
                password
            });
            
            return reply.send(data);
        } catch(error) {
            reply.send(error);
        }
    });

    fastify.get('/', async (request, reply)=>{      
        try{
            const data = await userUseCase.list();

            if (!data || data.length == 0){                
                return reply.send({message: 'Não tem usuários cadastrados'});
            } 

            return reply.send(data);
        } catch(error){
            reply.code(500).send(error);
        }
    })
}