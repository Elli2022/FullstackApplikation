"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Exempel för components/Navbar.tsx
//src/components/Navbar.tsx
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
function Navbar() {
    return (<nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold"></span>
        <div className="space-x-4">
          <link_1.default href="/">Home</link_1.default>
          <link_1.default href="/register">Register</link_1.default>
          <link_1.default href="/signin">Sign In</link_1.default>
          <link_1.default href="/dashboard">Dashboard</link_1.default>
        </div>
      </div>
    </nav>);
}
exports.default = Navbar;
