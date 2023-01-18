export const random = (cantidad, obj) =>{
    for (let i=0; i < cantidad; i++){
        let numero = (Math.random()*(1000 - 1)+ 1)*cantidad
        if(obj[numero]){
            obj[numero]++;
            continue
        }
        obj[numero]= 1

    }
    return obj
        
}

