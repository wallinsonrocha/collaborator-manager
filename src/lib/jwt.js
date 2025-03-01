import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export async function verify(token){
    return jwt.verify(token, JWT_SECRET);
}

export async function sign(payload){
    return jwt.verify(payload, JWT_SECRET);
}