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
Object.defineProperty(exports, "__esModule", { value: true });
//src/app/libs/mongodb/mongodb.ts
function makeDB({ dbClient }) {
    return Object.freeze({
        insertOneDocument,
        findDocuments,
        updateDocument,
        dropDb,
    });
    function insertOneDocument({ document, dbName, dbUri, dbColl }) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = new dbClient({ dbName, dbUri, dbColl });
            const results = yield db.insertDocument({ document });
            return results;
        });
    }
    function updateDocument({ query, values, dbName, dbUri, dbColl }) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = new dbClient({ dbName, dbUri, dbColl });
            const results = yield db.updateDocument({ query, values });
            return results;
        });
    }
    function findDocuments({ query, dbName, dbUri, dbColl }) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = new dbClient({ dbName, dbUri, dbColl });
            const results = yield db.findDocumentsByQuery({ query });
            return results;
        });
    }
    function dropDb({ test, dbName, dbUri, dbColl }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!test)
                return;
            const db = new dbClient({ dbName, dbUri, dbColl });
            const results = db.dropDB();
            return results;
        });
    }
}
exports.default = makeDB;
