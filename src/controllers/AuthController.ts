import {Request, Response, NextFunction} from 'express'
import {Controller} from "../system/Controller";

import APIError from "../errors/ApiError";
import {HttpStatusCode} from "../system/HttpStatusCode";
import HttpException from "../exceptions/HttpException";
import {ResponseFormat} from "../system/ResponseFormat";

export class AuthController extends Controller {

    //path = '/user';
    access() {
        return [{action: "login|index", type: "GET", role: '@'}];
    }

    create = (req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({"message": "Hello"});
    };

    index = (req: Request, res: Response, next: NextFunction) => {
        res.json({"name": "I'm Auth Controller"});
    };

}
