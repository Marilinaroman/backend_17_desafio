import fs from "fs"

class contenedorMsj {
    constructor (data){
        this.data = data
        this.object = this.readData(this.data)  || [];
    }
    
    async getAll(){
        try{
            const data = await this.readData(this.data)
            return data
        } catch(err){
            console.log(err);
        }
    }

    async save(obj){
        try{
            const data = await this.getAll()
            const newId = data[data.length-1].id +1;
            const newMsj = {
                id:newId,
                autor:{id:obj.id,nombre:obj.nombre,edad:obj.edad,alias:obj.alias,avatar:obj.avatar},
                texto:obj.texto,
                hora:obj.hora
            }
            data.push(newMsj)
            this.reWriteData(data)
            return data
        } catch(err){
            console.log(err);
        }

    }    
    
    readData(path){
        const obj = JSON.parse(fs.readFileSync(path,'utf-8'))
        return obj
    }
    reWriteData(object){
        fs.writeFileSync(this.data,JSON.stringify(object,null,2))
    }
}

export {contenedorMsj}