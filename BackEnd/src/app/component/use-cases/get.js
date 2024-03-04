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
//src/app/component/use-cases/get.ts
function createGet({ makeInputObj, findDocuments, makeOutputObj, logger, }) {
    return Object.freeze({ get });
    function get({ params, dbConfig, errorMsgs }) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.info(`[USE-CASE][GET] Reading from db - START!`);
            Object.keys(params).forEach((key) => params[key] === undefined && delete params[key]);
            console.log(params);
            if (Object.values(params).length) {
                const userFactory = makeInputObj({ params });
                params = {
                    usernameHash: !params.username ? undefined : userFactory.usernameHash(),
                    emailHash: !params.email ? undefined : userFactory.emailHash(),
                    usernamePasswordHash: !params.usernamePasswordHash
                        ? undefined
                        : userFactory.usernamePasswordHash(),
                };
                Object.keys(params).forEach((key) => params[key] === undefined && delete params[key]);
            }
            console.log(params);
            // 'and' query
            const dbResults = yield findDocuments({ query: params, dbConfig });
            const results = dbResults.map((post) => {
                const resultsObj = makeOutputObj({ params: post });
                return {
                    username: resultsObj.username(),
                    email: resultsObj.email(),
                    created: resultsObj.created(),
                    modified: resultsObj.modified(),
                };
            });
            return results;
        });
    }
}
exports.default = createGet;
