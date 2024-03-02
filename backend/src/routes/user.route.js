import { Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { 
    reportQuery, 
    verifyToken, 
    verifyUser,
} from "../middlewares/verify.js";


const router = Router();

router.get("/", reportQuery, (req, res) => {
    res.json({ ok: true, result: "All ok in the root path" })
})
router.post("/usuarios", reportQuery, userController.addUser);
router.post("/login", reportQuery, verifyUser, userController.getLogin);
router.get("/usuarios", reportQuery, verifyToken, userController.getUser);

router.all("*", userController.notFound); 

export default router