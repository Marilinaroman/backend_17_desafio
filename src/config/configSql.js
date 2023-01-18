import path from 'path';
import {fileURLToPath} from 'url';
import { config } from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const options = {
    mariaDb:{
        client:'mysql',
        connection:{
            host: config.MARIADB_HOST,
            user: 'root',
            password:'',
            database:'ecommerce'
        }
    },
    sqlite: {
        client:"sqlite",
        connection:{
            filename:path.join(__dirname, config.SQLITE_DB)
            
        },
        useNullAsDefault: true
    },
    fileSystem:{
        pathMensajes: path.join(__dirname ,config.FILE_DB)
    }
}