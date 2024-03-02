import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "./src/database/config.js";
import userRouter from "./src/routes/user.route.js";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(userRouter);


app.use((err, req, res, next) => {
  return res.status(500).json({
    status: "error",
    message: err.message + "Ups..algo ocurrio :(",
  });
});

app.listen(PORT, () => {
  console.log(`Estamos Readyyyyy jejeje J.L. http://localhost:${PORT} `);
});