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
// src/app/component/use-cases/post.ts
const redisClient = require("../../libs/redisClient");
function createPost({ makeInputObj, findDocuments, insertDocument, get, logger, }) {
    return Object.freeze({ post });
    function post({ params, dbConfig, errorMsgs }) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.info("[POST][USE-CASE] Inserting object process - START!");
            const userFactory = makeInputObj({ params });
            const user = {
                username: userFactory.username(),
                password: userFactory.password(),
                email: userFactory.email(),
                role: userFactory.role(),
                usernameHash: userFactory.usernameHash(),
                emailHash: userFactory.emailHash(),
                usernamePasswordHash: userFactory.usernamePasswordHash(),
                created: userFactory.created(),
                modified: userFactory.modified(),
            };
            // Check for duplicates
            const query = { $or: [{ username: user.username }, { email: user.email }] };
            const checkDuplicate = yield findDocuments({ query, dbConfig });
            if (checkDuplicate.length) {
                throw new Error(errorMsgs.EXISTING_USER);
            }
            // Insert the user document
            const savedUser = yield insertDocument({ document: user, dbConfig });
            logger.info(`Användare ${savedUser.username} skapades`);
            // Cache the user in Redis
            yield cacheUser(savedUser);
            // Assuming 'get' retrieves the user, adjust as necessary
            const inserted = yield get({ params: { username: user.username } });
            return inserted;
        });
    }
    function cacheUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const cacheKey = `user:${user.username}`;
            try {
                yield redisClient.setEx(cacheKey, 3600, JSON.stringify(user));
                logger.info(`User ${user.username} cached in Redis.`);
            }
            catch (error) {
                logger.error(`Redis error while setting cache: ${error}`);
            }
        });
    }
}
exports.default = createPost;
