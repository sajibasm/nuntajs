"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth = () => {
    return (req, res, next) => {
        if (req.headers['content-type'] !== 'application/json') {
            console.log("Auth Calling");
            res.status(400).send('Server requires application/json');
        }
        else {
            next();
        }
    };
};
exports.default = auth;
//# sourceMappingURL=authenticate.js.map