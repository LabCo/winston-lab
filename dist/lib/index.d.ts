/// <reference types="winston" />
import * as winston from "winston";
export declare module LabLogger {
    function createFromClass(clazz: any, logLevel?: string): winston.LoggerInstance;
    function create(streamName: string, logLevel?: string): winston.LoggerInstance;
}
