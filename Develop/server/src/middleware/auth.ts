import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
    username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access token is missing' });
    }

    try {
        const secretKey = process.env.JWT_SECRET_KEY as string;
        const decoded = jwt.verify(token, secretKey) as JwtPayload;

        
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};