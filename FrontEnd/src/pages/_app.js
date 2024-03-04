"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const theme_provider_1 = require("@/components/theme-provider");
const layout_1 = __importDefault(require("@/app/layout")); // Uppdatera importen
function MyApp({ Component, pageProps }) {
    return (<theme_provider_1.ThemeProvider>
      <layout_1.default>
        {" "}
        {/* Använd RootLayout för att omsluta ditt innehåll */}
        <Component {...pageProps}/>
      </layout_1.default>
    </theme_provider_1.ThemeProvider>);
}
exports.default = MyApp;
