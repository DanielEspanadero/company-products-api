import jsonwebtoken from 'jsonwebtoken';
import config from '../config';

import User from '../models/User';
import Role from '../models/Role';

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token'];

        if (!token) return res.status(403).json({ msg: 'No tokem provided' });

        const decoded = jsonwebtoken.verify(token, config.SECRET);
        req.userId = decoded.id;

        const user = await User.findById(req.userId, { password: 0 });
        if (!user) return res.status(404).json({ msg: 'No user found' });

        next()
    } catch (error) {
        res.status(401).json({
            msg: 'Unauthorize'
        });
    };
};

export const isModerator = async (req, res, next) => {
    const user = await User.findById(req.userId);
};

export const isAdmin = async (req, res, next) => {

};