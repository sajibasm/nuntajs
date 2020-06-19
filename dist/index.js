"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const bodyParser = require("body-parser");
const logger_1 = require("./middleware/logger");
const error_middleware_1 = require("./exceptions/error.middleware");
const dotenv = require("dotenv");
dotenv.config();
const AutoLoader_1 = require("./system/AutoLoader");
const autoLoader = new AutoLoader_1.AutoLoader();
try {
    const app = new app_1.default({
        port: parseInt(process.env.PORT),
        controllers: autoLoader.load(),
        middleWares: [
            error_middleware_1.default,
            bodyParser.json(),
            bodyParser.urlencoded({ extended: true }),
            logger_1.default,
            require('express-status-monitor')()
        ]
    });
    app.listen();
}
catch (e) {
    console.log(e);
}
process.on('unhandledRejection', (reason, promise) => {
    throw reason;
});
process.on('uncaughtException', (error) => {
    //errorHandler.handleError(error);
    //if (!errorHandler.isTrustedError(error)) {
    //  process.exit(1);
    //}
});
//# sourceMappingURL=index.js.map