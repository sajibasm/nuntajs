// import { NextFunction, Response } from 'express';
// //import * as jwt from 'jsonwebtoken';
// import TokenException from '../exception/Token';
// import WrongTokenException from '../exception/WrongAuthenticationTokenException';
// //import DataStoredInToken from '../interfaces/dataStoredInToken';
// import RequestWithUser from '../interfaces/requestWithUser.interface';
// //import userModel from '../user/user.model';
//
// async function authMiddleware(request: RequestWithUser, response: Response, next: NextFunction) {
//     const cookies = request.cookies;
//     if (cookies && cookies.Authorization) {
//         // const secret = process.env.JWT_SECRET;
//         // try {
//         //     const verificationResponse = jwt.verify(cookies.Authorization, secret) as DataStoredInToken;
//         //     const id = verificationResponse._id;
//         //     const user = await userModel.findById(id);
//         //     if (user) {
//         //         request.user = user;
//         //         next();
//         //     } else {
//         //         next(new WrongTokenException());
//         //     }
//         // } catch (error) {
//         //     next(new WrongTokenException());
//         // }
//     } else {
//         next(new TokenException());
//     }
// }
//
// export default authMiddleware;
//# sourceMappingURL=auth.js.map