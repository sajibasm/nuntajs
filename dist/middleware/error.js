// import {NextFunction, Request, Response} from 'express';
// import HttpException from "../exceptions/HttpException";
//
// function errorMiddleware(error: HttpException, req: Request, resp: Response, next: NextFunction) {
//     const status = error.status || 500;
//     const message = error.message || 'Something went wrong';
//     resp.status(status)
//         .send({
//             message,
//             status,
//         });
// }
//
// export default errorMiddleware;
//# sourceMappingURL=error.js.map