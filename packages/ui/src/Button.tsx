import React from 'react'

interface ButtonProps {
  label: string
}

export const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>
}

// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.Button = void 0;
// var react_1 = __importDefault(require("react"));
// var Button = function (props) {
//     return react_1.default.createElement("button", null, props.label);
// };
// exports.Button = Button;
