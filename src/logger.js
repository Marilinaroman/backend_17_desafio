import log4js from "log4js"

log4js.configure({
    appenders:{
        consola:{type:"console"},
        archivoError:{type:"file", filename:"./src/logs/error.log"},
        archivoWarn:{type:"file", filename:"./src/logs/warn.log"},

        //defino niveles de logueo
        loggerConsola:{type:'logLevelFilter', appender:'consola', level:'info'},
        loggerError:{type:'logLevelFilter', appender:'archivoError', level:'error'},
        loggerWarn:{type:'logLevelFilter', appender:'archivoWarn', level:'warn'}
    },
    categories:{
        default:{appenders:['consola'], level:'info'},
        error:{appenders:['archivoError'], level:'error'},
    }
})

const logger = log4js.getLogger()
const logArchivoError = log4js.getLogger('error')
const logArchivoWarn = log4js.getLogger('warn')

export {logger,logArchivoError, logArchivoWarn}