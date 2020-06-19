import * as express from 'express'

//import validation from "../middleware/validation";
import auth from "../middleware/authenticate";
const { checkSchema, check, validationResult, buildCheckFunction,  } = require('express-validator');
const checkBodyAndQuery = buildCheckFunction(['body', 'query']);

export abstract class Controller {

    private _path = '/';
    private _auth = auth;
    public router = express.Router();

    public check = check();
    public checkSchema = checkSchema;
    public checkBodyAndQuery = checkBodyAndQuery;
    public validationResult = validationResult;
    public buildCheckFunction = buildCheckFunction;

    get auth(): () => (req, res, next) => void {
        return this._auth;
    }

    get path(): string {
        return this._path;
    }

    set path(value: string) {
        this._path = value;
    }

    access() {}

};



