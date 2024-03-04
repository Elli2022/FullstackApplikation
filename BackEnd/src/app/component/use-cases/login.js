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
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const redisClient = require("../../libs/redisClient");
function createLogin({ findDocuments, logger }) {
    return Object.freeze({ login });
    function login({ username, password, dbConfig }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger.info("[LOGIN][USE-CASE] Login process - START!");
                logger.info(`[LOGIN][USE-CASE] Attempting login for username: ${username}`);
                // Hämtar användaren från databasen
                const query = { username };
                const users = yield findDocuments({ query, dbConfig });
                const user = users[0];
                // Kontrollerar om användaren hittades
                if (!user) {
                    logger.warn("[LOGIN][USE-CASE] User not found in database");
                    throw new Error("Användaren hittades inte.");
                }
                // Hashar det inskickade lösenordet
                const hashedPassword = crypto
                    .createHash("md5")
                    .update(password)
                    .digest("hex");
                // Jämför det hashade lösenordet med det lagrade lösenordet
                if (hashedPassword !== user.password) {
                    logger.warn("[LOGIN][USE-CASE] Incorrect password");
                    throw new Error("Felaktigt lösenord.");
                }
                // Skapar JWT-token
                const token = jwt.sign({ userId: user._id }, "din_jwt_secret", {
                    expiresIn: "1h",
                });
                logger.info("[LOGIN][USE-CASE] Login successful. Token generated.");
                // Cachar JWT-token i Redis
                yield cacheToken(username, token);
                return token;
            }
            catch (error) {
                logger.error(`[LOGIN][USE-CASE] Error: ${error.message}`);
                throw error;
            }
        });
    }
    function cacheToken(username, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const cacheKey = `token:${username}`;
            try {
                yield redisClient.setEx(cacheKey, 3600, token);
                logger.info(`Token for ${username} cached in Redis.`);
            }
            catch (error) {
                logger.error(`Redis error while setting token cache: ${error}`);
            }
        });
    }
}
exports.default = createLogin;
