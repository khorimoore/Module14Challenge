import { Router, Request, Response } from 'express';
import { User } from '../models/user'; // Ensure this points to the correct user model file
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = Router();

// POST /login - Login a user
export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        // Check if the user exists in the database
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Validate the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Sign a JWT token
        const token = jwt.sign(
            { userId: user.id, username: user.username },
            process.env.JWT_SECRET as string, // Ensure JWT_SECRET is defined in .env
            { expiresIn: '1h' }
        );

        // Return the token to the client
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

router.post('/login', login);

export default router;