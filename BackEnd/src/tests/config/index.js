"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//src/tests/config/index.ts
const path = __importStar(require("path"));
const APP_NAME = "AUTH-MS-TEST";
const NODE_ENV = "test";
const FILE_FOLDER_NAME = "data";
const FILE_FOLDER_PATH = path.join(__dirname, "../data/");
const FILE_DB_NAME = "users.json";
const FILE_DB_PATH = `${FILE_FOLDER_PATH}/${FILE_DB_NAME}`;
const DB_CONFIG = {
    dbName: "db_my_app_test",
    dbUri: process.env.MONGODB_DB_URL,
    dbColl: "coll_users",
};
const ERROR_MSG = {
    post: {
        MISSING_PARAMETER: "missing parameter: ",
        EXISTING_USER: "user already exists",
        INVALID_EMAIL: "invalid email",
    },
};
const TEST_DATA = {
    user1: {
        username: "user1",
        password: "password1",
        email: "user1@example.com",
    },
    user2: {
        username: "user2",
        password: "password2",
        email: "user2@example.com",
    },
};
exports.default = Object.freeze({
    APP_NAME,
    NODE_ENV,
    ERROR_MSG,
    DB_CONFIG,
    FILE_FOLDER_NAME,
    FILE_FOLDER_PATH,
    FILE_DB_NAME,
    FILE_DB_PATH,
    TEST_DATA,
});
