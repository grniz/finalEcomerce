import winston from "winston";
import config from "../config/config.js";

const loginConfig = {
    development:[
        new winston.transport.Console({
            level: "debug",
        }),
        new winston.transport.File({
            filename: "./logs.log",
            level: "info",
        }),
    ],
    production:[
        new winston.transport.Console({
            level: "error",
        }),
        new winston.transport.file({
            filename: "./logs.log",
            level: "warn",
        }),
    ],
};

const addLogger = (req,res,next) => {
    req.logger = winston.createLogger({
        transports: loginConfig[config.app.ENV],
    });
    req.logger.http(`${req.method} ${req.url}- ${new date().toLocaleTimeString()}`);
    next();
};

export default addLogger;
