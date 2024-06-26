import { config } from 'dotenv';
config()

export const DB_DEV_NAME: string = process.env.DB_DEV_NAME || "";
export const DB_USER: string = process.env.DB_USER || "";
export const DB_PASSWORD: string = process.env.DB_PASSWORD || ""; 
export const PORT = process.env.PORT || 8000;
export const TK_SECRET = process.env.TK_SECRET || "";
export const DB_TEST_NAME = process.env.DB_TEST_NAME || "";
export const NODE_ENV = process.env.NODE_ENV;