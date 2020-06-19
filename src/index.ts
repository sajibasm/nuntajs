import App from './app'
import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/logger'
import errorMiddleware from "./exceptions/error.middleware";

import * as dotenv from "dotenv";
dotenv.config();

import  {AutoLoader} from "./system/AutoLoader"
const autoLoader = new AutoLoader();


try {
    const app = new App({
        port: parseInt(process.env.PORT),
        controllers: autoLoader.load(),
        middleWares: [
            errorMiddleware,
            bodyParser.json(),
            bodyParser.urlencoded({ extended: true }),
            loggerMiddleware,
            require('express-status-monitor')()
        ]
    });
    app.listen();
}catch (e) {
    console.log(e);
}

process.on('unhandledRejection', (reason: Error, promise: Promise<any>) => {
    throw reason;
});

process.on('uncaughtException', (error: Error) => {
    //errorHandler.handleError(error);
    //if (!errorHandler.isTrustedError(error)) {
      //  process.exit(1);
    //}
});

