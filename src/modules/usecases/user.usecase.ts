import { hash } from 'bcryptjs'
import { User, UserCreate } from "../interfaces/user.interface";
import { UserRepositoryPrisma } from "../repository/user.repository";

export class UserUseCase {
    private userRepository: UserRepositoryPrisma;

    constructor() {
        this.userRepository = new UserRepositoryPrisma();
    }

    async create({ name, email, password }: UserCreate): Promise<User> {
        const hashPws = await hash(password, 16);
        const result = await this.userRepository.create({name, email, password: hashPws});

        return result;
    }

    async list(): Promise<User[]>{
        const result = await this.userRepository.list();
        return result;
    }
}