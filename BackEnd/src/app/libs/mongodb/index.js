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
exports.dropDb = exports.updateDocument = exports.findDocuments = exports.insertOneDocument = void 0;
// src/app/libs/mongodb/index.ts
const mongoDb_1 = __importDefault(require("../../initializers/mongoDb"));
const insertOneDocument = ({ document }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoDb_1.default.connect();
        const result = yield mongoDb_1.default.insertDocument({ document });
        return result;
    }
    finally {
        yield mongoDb_1.default.close();
    }
});
exports.insertOneDocument = insertOneDocument;
const findDocuments = ({ query }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoDb_1.default.connect();
        const results = yield mongoDb_1.default.findDocumentsByQuery({ query });
        return results;
    }
    finally {
        yield mongoDb_1.default.close();
    }
});
exports.findDocuments = findDocuments;
const updateDocument = ({ query, values }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoDb_1.default.connect();
        const result = yield mongoDb_1.default.updateDocument({
            query,
            values: { $set: values },
        });
        return result;
    }
    finally {
        yield mongoDb_1.default.close();
    }
});
exports.updateDocument = updateDocument;
const dropDb = (dbConfig) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoDb_1.default.connect();
        yield mongoDb_1.default.dropDB();
    }
    finally {
        yield mongoDb_1.default.close();
    }
});
exports.dropDb = dropDb;
