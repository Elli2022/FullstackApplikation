"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//src/components/ui/LogoutButton.tsx
// src/components/ui/LogoutButton.tsx
const react_1 = __importDefault(require("react"));
const LogoutButton = ({ onLogout }) => {
    return <button onClick={onLogout}>Logga ut</button>;
};
exports.default = LogoutButton;
