import { options } from "../config/configSql.js";
import knex from "knex";

//instancia de las db

const dbmariaDb = knex(options.mariaDb)
const dbSqlite = knex(options.sqlite) 

// se ejecuta con "npm run create"
const createTable = async()=>{
    try{

        //tabla de productos
        const productosExiste = await dbmariaDb.schema.hasTable('productos')

        if(productosExiste){
            await dbmariaDb.schema.dropTable('productos')
        }

        await dbmariaDb.schema.createTable('productos', table=>{
            table.increments("id");
            table.integer('timestamp',20).nullable(false);
            table.integer('stock',20).nullable(false);
            table.string("nombre",20).nullable(false);
            table.float('price',20).nullable(false);
            table.string('url',100).nullable(false)
        })
        console.log('tabla creada exitosamente');
        dbmariaDb.destroy()

        //tabla de mensajes
        const mensajesExiste= await dbSqlite.schema.hasTable('mensajes')

        if(mensajesExiste){
            await dbSqlite.schema.dropTable('mensajes')
        }
        await dbSqlite.schema.createTable('mensajes', table=>{
                table.increments("id");
                table.string("email",20).nullable(false);
                table.string('time',20).nullable(false);
                table.string('mensaje',100).nullable(false);
        })
        console.log('tabla de mensajes creada exitosamente')
        dbSqlite.destroy()

    } catch(err){
        console.log(err);
    }
}
createTable()