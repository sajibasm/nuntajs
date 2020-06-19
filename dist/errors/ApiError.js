"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseError_1 = require("./BaseError");
const HttpStatusCode_1 = require("../system/HttpStatusCode");
class APIError extends BaseError_1.default {
    constructor(name, httpCode = HttpStatusCode_1.HttpStatusCode.INTERNAL_SERVER, isOperational = true, description = 'internal server error') {
        super(name, httpCode, isOperational, description);
    }
}
exports.default = APIError;
//# sourceMappingURL=ApiError.js.map