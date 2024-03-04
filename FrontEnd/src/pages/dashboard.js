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
// src/pages/dashboard.tsx
const react_1 = __importStar(require("react"));
const LogoutButton_1 = __importDefault(require("../components/ui/LogoutButton"));
const router_1 = require("next/router");
function Dashboard() {
    const [formData, setFormData] = (0, react_1.useState)({
        title: "",
        content: "",
        author: "",
    });
    const [isLoggedIn, setIsLoggedIn] = (0, react_1.useState)(false);
    const router = (0, router_1.useRouter)();
    (0, react_1.useEffect)(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(Object.assign(Object.assign({}, formData), { [name]: value }));
    };
    const handleBlogPost = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        if (!isLoggedIn) {
            console.error("Du måste logga in för att kunna skriva ett blogginlägg!");
            return;
        }
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        if (!token) {
            console.error("Ingen token hittades i localStorage");
            return;
        }
        const API_URL = "http://127.0.0.1:3013/api/v1/user/blog";
        try {
            const response = yield fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    userId,
                    title: formData.title,
                    content: formData.content,
                    author: formData.author,
                }),
            });
            if (!response.ok) {
                throw new Error("Fel vid skickande av blogginlägg");
            }
            const result = yield response.json();
            console.log("Blogginlägg skickat:", result);
            setFormData({ title: "", content: "", author: "" });
        }
        catch (error) {
            console.error("Ett fel inträffade vid skickande av blogginlägget:", error);
        }
    });
    const handleLogout = () => __awaiter(this, void 0, void 0, function* () {
        try {
            if ("caches" in window) {
                const cacheNames = yield caches.keys();
                yield Promise.all(cacheNames.map((name) => caches.delete(name)));
            }
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            setIsLoggedIn(false);
            console.log("Utloggning genomförd. Token och cache är rensade.");
            router.push("/signin");
        }
        catch (error) {
            console.error("Ett fel uppstod under utloggningen:", error);
        }
    });
    return (<div>
      <h1>Skapa ett Blogginlägg</h1>
      {!isLoggedIn ? (<p>Du måste logga in för att kunna skriva ett blogginlägg!</p>) : (<>
          <LogoutButton_1.default onLogout={handleLogout}/>
          <form onSubmit={handleBlogPost}>
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Titel" required/>
            <input type="text" name="content" value={formData.content} onChange={handleChange} placeholder="Innehåll" required/>
            <input type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Författare" required/>
            <button type="submit">Skicka</button>
          </form>
        </>)}
    </div>);
}
exports.default = Dashboard;
