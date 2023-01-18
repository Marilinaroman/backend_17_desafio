import knex from 'knex'

class ContenedorSqlite{
    constructor(options,tableName){
        this.database = knex(options)
        this.table=tableName
    }

    async getById(id){
        try{
            const result = await this.database(this.table).select("*").where('id','=',id);
            return result
        } catch(err){
            console.log(err);
        }
        
    }

    async getAll(){
        try{
            const result = await this.database(this.table).select("*");
            const products = result.map(elm=>({...elm}));
            return products
        } catch(err){
            console.log(err);
        }
        
    }

    async deleteById(id){
        try{
            this.database.from(this.table).where('id','=',id).del()
            .then(()=>console.log("producto eliminado"))
        }catch(err){
            console.log(err);
        }
        
    }

    async deleteAll(){
        try{
            this.database.from(this.table).del()
            .then(()=>console.log("productos eliminados"))
        }catch(err){
            console.log(err);
        }
        
    }

    async save(body){
        try{
            let time = new Date()
            const [id] = await this.database(this.table).insert({
                time: time.toLocaleString(),
                email: body.email,
                mensaje: body.mensaje,
            });
            const msj = await this.getById(id)
            return msj

        }catch(err){
            console.log(err);
        }
        
    }

}

export default ContenedorSqlite