import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
    PORT: process.env.PORT!,
    DATABASE_URL: process.env.DATABASE_URL!,
    API_URL: process.env.API_URL!,
    JWT_SECRET: process.env.JWT_SECRET!,
}