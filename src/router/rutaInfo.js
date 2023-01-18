import express from 'express'
import {fork} from 'child_process'
import compression from "compression"

const routerInfo = express.Router()

routerInfo.get('/',(req,res)=>{
    
    res.json({Version_de_Node_JS : process.version,
    Nombre_de_la_plataforma: process.platform,
    Path_de_ejecución : process.execPath,
    Proceso_ID : process.pid,
    Memoria_en_uso: process.memoryUsage().rss,
    Directorio :process.cwd(),
    Numero_de_procesadores:process.pid,
})
})

routerInfo.get('/randoms',(req,res)=>{

    const child = fork("src/child/child.js");
    const {cantidad} = req.query
    
    let obj = {};

    cantidad
            ? child.send({ cantidad, obj })
            : child.send({ cantidad: 500000000, obj });
            child.on('message', msg => res.json(msg))
    /* if(cantidad){
        for (let i=0; i < cantidad; i++){
            let numero = (Math.random()*(1000 - 1)+ 1)*cantidad
            if(obj[numero]){
                obj[numero]++;
                continue
            }
            obj[numero]= 1
    
        }
    }else {
        for (let i=0; i < 500000000; i++){
            let numero = (Math.random()*(1000 - 1)+ 1)*500000000
            if(obj[numero]){
                obj[numero]++;
                continue
            }
            obj[numero]= 1
    
        }
    } */
        
    
})
routerInfo.get('/randomsZip',compression(),(req,res)=>{

    const child = fork("src/child/child.js");
    const {cantidad} = req.query
    
    let obj = {};
    cantidad
            ? child.send({ cantidad, obj })
            : child.send({ cantidad: 500000000, obj });
            child.on('message', msg => res.json(msg))
    
})

export default routerInfo