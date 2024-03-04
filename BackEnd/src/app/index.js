"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//src/app/index.ts
// Läs in .env-filen
require("dotenv").config();
const config_1 = __importDefault(require("./config"));
const express_1 = require("./initializers/express");
const logger_1 = require("./libs/logger");
try {
    logger_1.logger.info(`[${config_1.default.APP_NAME}] Bootstrapping micro service`);
    (0, express_1.server)({ hostname: config_1.default.NODE_HOSTNAME, port: config_1.default.NODE_PORT });
}
catch (error) {
    logger_1.logger.error(`[${name}] Caught exception: ${error}`);
}
