import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env";

const connecToDatabase = async () => {
	try {
		await mongoose.connect(MONGO_URI);

	} catch (error) {
		console.log("No se pudo conectar a la base de datos", error);
		process.exit(1);
	}
}
export default connecToDatabase;