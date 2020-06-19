"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const Controller_1 = require("../system/Controller");
class DashboardController extends Controller_1.Controller {
    constructor() {
        super(...arguments);
        this.index = (req, res, next) => {
            res.json({ "name": "I'm Dashboard Controller" });
        };
    }
    //path = '/user';
    access() {
        return [{ action: "index", type: "GET", role: '@' }];
    }
}
exports.DashboardController = DashboardController;
//# sourceMappingURL=DashboardController.js.map