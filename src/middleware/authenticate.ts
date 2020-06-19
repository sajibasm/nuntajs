 import * as express from 'express';
const auth = () => {
    return (req, res, next) => {
        if (req.headers['content-type'] !== 'application/json') {
            console.log("Auth Calling")
            res.status(400).send('Server requires application/json');
        } else {
            next();
        }
    }
};

export default auth;
