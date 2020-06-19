
import BaseError from "./BaseError";
import {HttpStatusCode} from '../system/HttpStatusCode'

class HTTP400Error extends BaseError {
    constructor(description = 'bad request') {
        super('NOT FOUND', HttpStatusCode.BAD_REQUEST, true, description);
    }
}

export default HTTP400Error;
