"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseError_1 = require("./BaseError");
const HttpStatusCode_1 = require("../system/HttpStatusCode");
class HTTP400Error extends BaseError_1.default {
    constructor(description = 'bad request') {
        super('NOT FOUND', HttpStatusCode_1.HttpStatusCode.BAD_REQUEST, true, description);
    }
}
exports.default = HTTP400Error;
//# sourceMappingURL=HTTP400Error.js.map