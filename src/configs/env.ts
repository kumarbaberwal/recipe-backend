import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
    PORT: process.env.PORT!,
    DATABASE_URL: process.env.DATABASE_URL!,
    API_URL: process.env.API_URL!,
    NODE_ENV: process.env.NODE_ENV!,
    JWT_SECRET: process.env.JWT_SECRET!,
}