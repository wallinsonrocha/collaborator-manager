import { prisma } from "../../database/prisma";

interface authLogin {
    email: string;
    password: string;
}

// async function auth(data) {
//     prisma.user.findUnique({
//         where: {
//             email: data
//         }
//     })        
// }