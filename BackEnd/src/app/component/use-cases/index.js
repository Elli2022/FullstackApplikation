"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postBlog = exports.get = exports.post = void 0;
//src/app/component/use-cases/index.ts
const post_1 = __importDefault(require("./post"));
const get_1 = __importDefault(require("./get"));
const postBlog_1 = __importDefault(require("./postBlog")); // Importera createPostBlog
const config_1 = __importDefault(require("../../config"));
const logger_1 = require("../../libs/logger");
const entities_1 = require("../entities");
const data_access_1 = require("../data-access");
const dbConfig = config_1.default.DB_CONFIG;
const errorMsgs = config_1.default.ERROR_MSG;
const get = ({ params }) => (0, get_1.default)({
    makeInputObj: entities_1.makeInputObj,
    findDocuments: data_access_1.findDocuments,
    makeOutputObj: entities_1.makeOutputObj,
    logger: logger_1.logger,
}).get({
    params,
    dbConfig,
    errorMsgs,
});
exports.get = get;
const post = ({ params }) => (0, post_1.default)({
    makeInputObj: entities_1.makeInputObj,
    insertDocument: data_access_1.insertDocument,
    findDocuments: data_access_1.findDocuments,
    get,
    logger: logger_1.logger,
}).post({
    params,
    dbConfig: config_1.default.DB_CONFIG,
    errorMsgs: errorMsgs.post,
});
exports.post = post;
const postBlog = (0, postBlog_1.default)({ logger: logger_1.logger }); // Skapa postBlog-funktionen
exports.postBlog = postBlog;
