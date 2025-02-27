import { expect, it, vi } from 'vitest';
import { UserUseCase } from './user.usecase';
import { prisma } from '../../database/__mocks__/prisma';
import { app } from '../../server';
import request from 'supertest';

const userUseCase = new UserUseCase();
const userList = [
    { id: '1', name: "User name", email: "email@test.com", password: "12345678", verified: true, created_at: new Date('2025-02-27') },
    { id: '2', name: "User name 2", email: "email2@test.com", password: "12345678", verified: true, created_at: new Date('2025-02-27') },
]

// Para mocar as consultas
vi.mock("../../database/prisma");

it('should return a list of users', async () => {
    prisma.user.findMany.mockResolvedValue(userList);

    const user = await userUseCase.list();
    const len = user.length;

    expect(len).toBeGreaterThan(1);
    expect(user).toEqual(userList);
});

// it('should return status code 200', async () => {    
//     prisma.user.findMany.mockResolvedValue(userList);
//     await app.ready();

//     const response = await request(app.server).get('/users');

//     console.log(response.body)
//     expect(response.status).toBe(200);
// });