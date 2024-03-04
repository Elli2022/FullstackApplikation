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
// src/app/initializers/mongoDb/index.ts
const mongodb_1 = require("mongodb");
const config_1 = __importDefault(require("../../config")); // Importera konfigurationen
const logger_1 = require("../../libs/logger");
class mongoDBClient {
    constructor() {
        this.dbName = config_1.default.DB_CONFIG.dbName;
        this.dbUri = config_1.default.DB_CONFIG.dbUri;
        this.dbColl = config_1.default.DB_CONFIG.dbColl;
        this.connection = null;
        this.db = null;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            // Anslut utan de borttagna alternativen
            this.connection = yield mongodb_1.MongoClient.connect(this.dbUri);
            this.db = this.connection.db(this.dbName);
            logger_1.logger.info("[MONGODB] Connection successful.");
        });
    }
    findDocumentsByQuery({ query }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const results = yield this.db.collection(this.dbColl).find(query).toArray();
            yield this.close();
            return results;
        });
    }
    insertDocument({ document }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const results = yield this.db.collection(this.dbColl).insertOne(document);
            yield this.close();
            return results;
        });
    }
    updateDocument({ query, values }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const results = yield this.db
                .collection(this.dbColl)
                .updateOne(query, { $set: values });
            yield this.close();
            return results;
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.connection) {
                yield this.connection.close();
                logger_1.logger.info("[MONGODB] Connection closed.");
            }
        });
    }
    dropDB() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.db) {
                yield this.db.dropDatabase();
                logger_1.logger.info(`[MONGODB] Dropped DB ${this.dbName}`);
            }
        });
    }
}
exports.default = new mongoDBClient(); // Exportera en instans av klienten
