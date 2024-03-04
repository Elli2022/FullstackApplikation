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
//src/components/ModeToggle.tsx
const lucide_react_1 = require("lucide-react");
const next_themes_1 = require("next-themes");
const react_1 = __importStar(require("react"));
const button_1 = __importDefault(require("@/components/ui/button"));
function ModeToggle() {
    const { theme, setTheme } = (0, next_themes_1.useTheme)();
    const [isMounted, setIsMounted] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted)
        return null;
    return (<div className="fixed top-4 right-4">
      <button_1.default onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <lucide_react_1.Sun size="1.2rem"/> : <lucide_react_1.Moon size="1.2rem"/>}
        <span className="sr-only">Toggle Dark Mode</span>
      </button_1.default>
    </div>);
}
exports.default = ModeToggle;
