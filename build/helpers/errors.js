"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const base = (message, status = 400) => {
    return express_1.response.json({
        message,
        status,
    });
};
const server = () => {
    return express_1.response.json({
        message: "Internal server error",
        status: 500,
    });
};
const request = (errors) => {
    return express_1.response.json({
        errors,
        message: "Invalid request",
        status: 400,
    });
};
const authorization = () => {
    express_1.response.json({
        message: "You are not authenticated",
        status: 401,
    });
};
const unauthorized = () => {
    express_1.response.json({
        message: "You do not have permission to run this service.",
        status: 403,
    });
};
exports.default = {
    base,
    server,
    request,
    authorization,
    unauthorized,
};
