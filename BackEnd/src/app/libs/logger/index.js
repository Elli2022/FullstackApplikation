"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
//src/app/libs/logger/index.ts
const winston_1 = require("winston");
const transports_1 = __importDefault(require("./libs/transports"));
const { combine, timestamp, errors } = winston_1.format;
const ownTransports = (() => (0, transports_1.default)({ format: winston_1.format, transports: winston_1.transports }).logger())();
const logger = (0, winston_1.createLogger)({
    format: combine(errors({ stack: true }), timestamp({ format: "YYYY-MM-DD HH:mm:ss" })),
    defaultMeta: { service: process.env.NAME },
    transports: ownTransports,
});
exports.logger = logger;
