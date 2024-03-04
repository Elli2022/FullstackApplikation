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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//src/tests/entities/make-input-obj.spec.ts
require("dotenv").config();
const expect = require("chai").expect;
const crypto = __importStar(require("crypto"));
const sanitize = __importStar(require("sanitize-html"));
const config_1 = __importDefault(require("../config"));
const make_input_object_1 = __importDefault(require("../../app/component/entities/make-input-object"));
const errorMsgs = config_1.default.ERROR_MSG.post;
const md5 = (text) => crypto.createHash("md5").update(text, "utf8").digest("hex");
const makeInputObj = ({ params }) => (0, make_input_object_1.default)({ md5, sanitize }).inputObj({ params, errorMsgs });
describe("make-input-object", () => {
    it("should validate input", () => {
        const params = {
            username: config_1.default.TEST_DATA.user1.username,
            password: config_1.default.TEST_DATA.user1.password,
        };
        const makeInput = makeInputObj({ params });
        const user = {
            username: makeInput.username(),
            password: makeInput.password(),
            created: makeInput.created(),
            modified: makeInput.modified(),
        };
        expect(user.username).to.equal(config_1.default.TEST_DATA.user1.username);
    });
    it("should not validate an empty object", () => {
        try {
            const params = {};
            makeInputObj({ params });
        }
        catch (e) {
            expect(e.message).to.equal(errorMsgs.MISSING_PARAMETER + "username");
        }
    });
    it("should not validate an empty object", () => {
        try {
            const params = {
                username: config_1.default.TEST_DATA.user1.username,
            };
            makeInputObj({ params });
        }
        catch (e) {
            expect(e.message).to.equal(errorMsgs.MISSING_PARAMETER + "password");
        }
    });
});
