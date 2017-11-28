
import * as winston from "winston"


export module LabLogger {
  
  export function createFromClass(clazz: any, logLevel: string = 'info') {
    const streamName = clazz.constructor.name as string
    return create(streamName, logLevel)
  }

  export function create(streamName: string, logLevel: string = 'info') {

    const nameFilter: winston.MetadataFilter = function (level: string, msg: string, meta: any) {
      const newMsg = `[${streamName}] ${msg}`
      return {msg: newMsg, meta}
    }
    const loggerParams: winston.LoggerOptions = {
      level: logLevel,
      transports: [ new winston.transports.Console({colorize:true}) ],
      filters: [nameFilter]
    }
    return new winston.Logger(loggerParams)

  }

}