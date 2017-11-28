"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
var LabLogger;
(function (LabLogger) {
    function createFromClass(clazz, logLevel = 'info') {
        const streamName = clazz.constructor.name;
        return create(streamName, logLevel);
    }
    LabLogger.createFromClass = createFromClass;
    function create(streamName, logLevel = 'info') {
        const nameFilter = function (level, msg, meta) {
            const newMsg = `[${streamName}] ${msg}`;
            return { msg: newMsg, meta };
        };
        const loggerParams = {
            level: logLevel,
            transports: [new winston.transports.Console({ colorize: true })],
            filters: [nameFilter]
        };
        return new winston.Logger(loggerParams);
    }
    LabLogger.create = create;
})(LabLogger = exports.LabLogger || (exports.LabLogger = {}));
