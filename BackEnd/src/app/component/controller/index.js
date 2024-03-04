"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
//src/app/component/controller/index.ts
const logger_1 = require("../../libs/logger");
const use_cases_1 = require("../use-cases");
const config_1 = __importDefault(require("../../config"));
const baseUrl = "/api/v1/user";
const getUsersEP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield (0, use_cases_1.get)({ params: req.params });
        res.json({ err: 0, data: results });
    }
    catch (err) {
        logger_1.logger.error(`[EP][GET] ${req.method}: ${err}`);
        res.status(403);
        res.json({ err: 1, data: { err } });
    }
});
const registerUserEP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield (0, use_cases_1.post)({ params: req.body });
        res.status(201).json({ err: 0, data: results }); // 201 Created för en lyckad skapelse
    }
    catch (err) {
        logger_1.logger.error(`[EP][POST] ${req.method}: ${err.message}`);
        const statusCode = err.isValidationError ? 400 : 500; // Exempel på att sätta rätt statuskod baserat på felets typ
        res.status(statusCode).json({ err: 1, data: err.message });
    }
});
const postBlogEP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Logik för att hantera postning av blogginlägg
        const results = yield use_cases_1.postBlog.postBlog({
            params: req.body,
            dbConfig: config_1.default.DB_CONFIG,
        });
        res.status(201).json({ err: 0, data: results });
    }
    catch (err) {
        logger_1.logger.error(`[EP][POSTBLOG] ${req.method}: ${err.message}`);
        res.status(500).json({ err: 1, data: err.message });
    }
});
const routes = [
    {
        path: `${baseUrl}/username/:username?/email/:email?`,
        method: "get",
        component: getUsersEP,
    },
    { path: `${baseUrl}/`, method: "post", component: registerUserEP },
    { path: `${baseUrl}/blog`, method: "post", component: postBlogEP },
];
exports.routes = routes;
