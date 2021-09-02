'use strict';

const winston = require('winston');
const Logger = winston.Logger;
const Console = winston.transports.Console;

const transports = [
    new Console()
]

const logger = new winston.createLogger({
    level: 'info',
    transports,
});

module.exports = logger;