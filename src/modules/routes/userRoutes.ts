import { FastifyInstance } from "fastify";
import { UserUseCase } from "../usecases/user.usecase";
import { UserCreate } from "../interfaces/user.interface";

export async function userRoutes(fastify: FastifyInstance){
    const userUseCase = new UserUseCase();
    
    fastify.post<{Body: UserCreate}>("/", (req, res)=>{
        const {name, email, password} = req.body;
        try{
            const data = userUseCase.create({
                name,
                email,
                password
            });
            
            return res.send(data);
        } catch(error) {
            res.send(error);
        }
    });

    fastify.get('/', (req, res)=>{
        try{
            const data = userUseCase.list();            
            return res.send(data);
        } catch(error){
            res.send(error);
        }
    })
}