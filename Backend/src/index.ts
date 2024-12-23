import "dotenv/config"
import express from 'express';
import connecToDatabase from './config/db';
import { APP_ORIGIN, NODE_ENV, PORT } from "./constants/env";
import cors from "cors";
import cookieParser from "cookie-parser";

const app  = express();

app.use(express.json());

app.use(
	express.urlencoded({extended: true})
);

app.use(cookieParser())	

app.use(
	cors({
		origin: APP_ORIGIN,
		credentials: true,
	})
)

//app.use(errorHandler);

app.get("/", (req, res) => {
	res.status(200).json({
		status: "Success",
	})
});

app.listen(4004, async () => {
	console.log(`Servidor ejecutandose en el puerto ${PORT}, ${NODE_ENV} enviroment.`);
	await connecToDatabase();
}) 