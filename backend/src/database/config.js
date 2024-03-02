import { config } from 'dotenv';

try {
    config();
} catch (error) {
    console.error("Error al cargar el archivo .env:", error);
}

export const db = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME_DATABASE,
};

export const PORT = process.env.PORT || 3000;