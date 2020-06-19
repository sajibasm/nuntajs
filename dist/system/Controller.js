"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const express = require("express");
//import validation from "../middleware/validation";
const authenticate_1 = require("../middleware/authenticate");
const { checkSchema, check, validationResult, buildCheckFunction, } = require('express-validator');
const checkBodyAndQuery = buildCheckFunction(['body', 'query']);
class Controller {
    constructor() {
        this._path = '/';
        this._auth = authenticate_1.default;
        this.router = express.Router();
        this.check = check();
        this.checkSchema = checkSchema;
        this.checkBodyAndQuery = checkBodyAndQuery;
        this.validationResult = validationResult;
        this.buildCheckFunction = buildCheckFunction;
    }
    get auth() {
        return this._auth;
    }
    get path() {
        return this._path;
    }
    set path(value) {
        this._path = value;
    }
    access() { }
}
exports.Controller = Controller;
;
//# sourceMappingURL=Controller.js.map