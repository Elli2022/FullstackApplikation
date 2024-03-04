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
Object.defineProperty(exports, "__esModule", { value: true });
// src/pages/signin.tsx
const react_1 = __importStar(require("react"));
function SignIn() {
    const [credentials, setCredentials] = (0, react_1.useState)({
        username: "",
        password: "",
    });
    const [error, setError] = (0, react_1.useState)("");
    const [isLoggedIn, setIsLoggedIn] = (0, react_1.useState)(false); // Ny state för att spåra inloggning
    const handleChange = (e) => {
        setCredentials(Object.assign(Object.assign({}, credentials), { [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        setError("");
        try {
            const response = yield fetch("http://127.0.0.1:3013/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });
            const data = yield response.json();
            if (!response.ok) {
                setError(data.error || "Ett fel inträffade vid inloggning.");
            }
            else {
                // Sparar token i localStorage och uppdatera inloggningsstatus
                localStorage.setItem("token", data.token);
                setIsLoggedIn(true);
                console.log("Inloggad, token:", data.token);
            }
        }
        catch (error) {
            setError("Kunde inte ansluta till servern.");
        }
    });
    return (<div>
      <h1>Logga in</h1>
      {error && <p className="error">{error}</p>}
      {isLoggedIn && <p>Du är nu inloggad!</p>}{" "}
      {/* Nytt meddelande om inloggad */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder="Användarnamn" required/>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Lösenord" required/>
        <button type="submit">Logga in</button>
      </form>
    </div>);
}
exports.default = SignIn;
