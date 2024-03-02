import { pool } from "../database/connection.js"


const create = async (email, password, rol, lenguage) => {
    try {
        const text = "INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING email, rol, lenguage"
        const { rows } = await pool.query(text, [email, password, rol, lenguage])
        return { rows }
    } catch (error) {
        console.log(error)
        throw error
    }
}

const login = async (email) => {
    try {
        const text = "SELECT * FROM usuarios WHERE email = $1";
        const result = await pool.query(text, [email]);
        return result;
    } catch (error) {
        console.log(error)
        throw error
    }
}

const findOne = async (email) => {
    try {
        const text = "SELECT email, rol, lenguage FROM usuarios WHERE email = $1";
        const {rows} = await pool.query(text, [email])
        return rows[0]
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const userModel = {
    create,
    login,
    findOne,
}