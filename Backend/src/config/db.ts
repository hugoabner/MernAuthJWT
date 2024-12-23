import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env";

/**@Define una funcion que ejecutara condigo asyncrono*/
/**@await detiene la ejecucion de una funcion hasta que una promesa sea resuelta*/
const connecToDatabase = async () => {
	try {
		/**@promesa */
		/**la funcion devuelve una promesa que se
		resuelve cuando la conexion es exitosa**/
		await mongoose.connect(MONGO_URI);
		console.log("Conexion ala base de datos exitoso");
	} catch (error) {
		console.log("No se pudo conectar a la base de datos", error);
		process.exit(1);
	}
}
export default connecToDatabase;

NODE_ENV= develoment
#frontend urlencoded
APP_ORIGIN=http://localhost:3000
#example: mongodb://localhost:22000/{DB_NAME}
MONGO_URI= mongodb+srv://hugopalominogalindo9742:fO63CXJxkmz7OFgZ@cluster0.7yu3v.mongodb.net/
JWT_SECRET= codeSecretKey
JWT_REFRESH= codeSecretKeyRefresh
# a verified sender email
EMAIL_SENDER= a
RESEND_API_KEY= a