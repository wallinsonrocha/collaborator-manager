export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface UserCreate{
    name: string;
    email: string;
    password: string;
}

export interface UserRepository {
    list(): Promise<User[]>
    create(data: UserCreate): Promise<User>
}