import { userModel } from "../models/user.models.js";
import { handleErrors } from "../database/errors.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


const addUser = async (req, res) => {
    const { email, password, rol, lenguage } = req.body
    try {
        if (!email || !password || !rol || !lenguage) {
            throw { code: "402" };
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const result = await userModel.create(email, hashPassword, rol, lenguage)
        console.log("Usuario registrado con éxito: ",  result.rows[0])
        return res.json({ ok: true, result: result.rows[0] })
    } catch (error) {
        const { status, message } = handleErrors(error.code)
        console.log(error, message)
        return res.status(status).json({ ok: false, result: message });
    }
}

const getLogin = async (req, res) => {
    const { email} = req.body
    try {
        //Aqui validamos parámetros en middleware
        const token = jwt.sign({ email }, process.env.JWTPASSWORD, {
            expiresIn: "1h",
        })
        console.log("Token jwt: ", token)
        res.json(token)
    } catch (error) {
        const { status, message } = handleErrors(error.code)
        console.log(error, message)
        return res.status(status).json({ ok: false, result: message });
    }
}

const getUser = async (req, res) => {
    const userEmail = req.email
    try {
        const result = await userModel.findOne(userEmail);
        const {email, rol, lenguage} = result
        console.log("-----------------------------")
        console.log("El usuario ha sido localizado: ", result)
        return res.json({email, rol, lenguage});
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code)
        return res.status(status).json({ ok: false, result: message });
    }
}

const notFound = (req, res) => {
    res.status(404).json({ error: "NOT FOUND, Página no encontrada" });
  };


export const userController = {
    getUser,
    addUser,
    getLogin,
    notFound,
}