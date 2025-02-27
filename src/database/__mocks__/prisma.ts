import { beforeEach } from "vitest";
import {mockDeep, mockReset} from 'vitest-mock-extended'
import {prisma as appPrisma} from '../prisma';

// Serve para fazer um mock das funcionalidades do Prisma
const prisma = mockDeep<typeof appPrisma>();

// Antes cada teste, fazer um reset e limpar o que foi criado.
beforeEach(()=>{
    mockReset(prisma);
});

export {prisma};