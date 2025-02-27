import { prisma } from "../../database/prisma";
import { User, UserCreate, UserRepository } from "../interfaces/user.interface";

export class UserRepositoryPrisma implements UserRepository {
    async create(data: UserCreate): Promise<User> {
        const result = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        })

        return result;
    }

    async list(): Promise<User[]> {
        const list = await prisma.user.findMany()
        return list        
    }
}