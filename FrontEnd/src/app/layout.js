"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app/layout.tsx
const react_1 = __importDefault(require("react"));
const theme_provider_1 = require("@/components/theme-provider");
const Navbar_1 = __importDefault(require("@/components/Navbar")); // Importera Navbar
const ModeToggle_1 = __importDefault(require("@/components/ModeToggle"));
function RootLayout({ children }) {
    return (<theme_provider_1.ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <Navbar_1.default /> {/* Använd Navbar här */}
        <ModeToggle_1.default />
        <div className="wrapper">{children}</div>
      </div>
    </theme_provider_1.ThemeProvider>);
}
exports.default = RootLayout;
