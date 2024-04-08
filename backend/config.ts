import 'dotenv/config';

export const DB_NAME: string = process.env.DB_NAME || '';
export const DB_USER: string = process.env.DB_USER || '';
export const DB_PASSWORD: string = process.env.DB_PASSWORD || '';
export const PORT = process.env.PORT || 5000;
export const TK_SECRET: string =process.env.TK_SECRET || '';