import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const DbConnection = async () => {
    try {
        await prisma.$connect();
        console.log('succesfull db connection');
        return true;
    } catch(error) {
        console.error(error);
        return false;
    }
}

