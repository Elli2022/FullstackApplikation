"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
//src/middleware/jwtMiddleware.ts
const jwt = require("jsonwebtoken");
const secretKey = "din_jwt_secret"; // Byt ut mot din faktiska hemliga nyckel
const validateToken = (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            return res
                .status(401)
                .json({ error: "Access denied. No token provided." });
        }
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(400).json({ error: "Invalid token." });
    }
};
exports.validateToken = validateToken;
module.exports = exports.validateToken;
