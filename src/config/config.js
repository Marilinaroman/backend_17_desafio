import * as dotenv from "dotenv";

dotenv.config()

//creamos la configuracion de nuestra aplicacion
export const config = {
    MARIADB_HOST: process.env.MARIADB_HOST,
    SQLITE_DB: process.env.SQLITE_DB,
    FILE_DB: process.env.FILE_DB,
    MONGO_AUTENTICATION:process.env.MONGO_AUTENTICATION,
    MONGO_SESSION:process.env.MONGO_SESSION
};