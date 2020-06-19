"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const Controller_1 = require("../system/Controller");
class AuthController extends Controller_1.Controller {
    constructor() {
        super(...arguments);
        this.create = (req, res, next) => {
            res.status(500).json({ "message": "Hello" });
        };
        this.index = (req, res, next) => {
            res.json({ "name": "I'm Auth Controller" });
        };
    }
    //path = '/user';
    access() {
        return [{ action: "login|index", type: "GET", role: '@' }];
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=AuthController.js.map