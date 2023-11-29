import jwt from 'jsonwebtoken'
import { errorHandler } from './error.js';

export const verifyToken = (req,res, next) => {
    // console.log('reached inside the verifyToken')
    // console.log('req -->', req.cookies.access_token)
    const token = req.cookies.access_token;
    // console.log('token', token)
    if (!token) return next(errorHandler(401, 'You are not authenticated!'));

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(errorHandler(403, 'Token is not valid!'));
        else console.log('jwt verified');
        req.user = user;
        console.log('user ', user)
        next()
    })
}