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
//src/pages/register.tsx
const react_1 = __importStar(require("react"));
const link_1 = __importDefault(require("next/link"));
function Register() {
    const [formData, setFormData] = (0, react_1.useState)({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = (0, react_1.useState)("");
    const [isRegistered, setIsRegistered] = (0, react_1.useState)(false);
    const handleChange = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));
    };
    const handleRegister = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        setError("");
        const API_URL = "http://127.0.0.1:3013/api/v1/user";
        try {
            const response = yield fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const result = yield response.json();
            if (!response.ok) {
                setError(result.data || "Ett fel uppstod vid registrering.");
            }
            else {
                setIsRegistered(true);
            }
        }
        catch (error) {
            setError("Ett oväntat fel inträffade.");
        }
    });
    return (<div>
      {isRegistered ? (<div>
          <h1>Välkommen, {formData.username}!</h1>
          <p>Vill du logga in?</p>
          <link_1.default href="/signin">Sign In</link_1.default>
        </div>) : (<>
          <h1>Registrera</h1>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleRegister}>
            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Användarnamn" required/>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-post" required/>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Lösenord" required/>
            <button type="submit">Registrera</button>
          </form>
        </>)}
    </div>);
}
exports.default = Register;
