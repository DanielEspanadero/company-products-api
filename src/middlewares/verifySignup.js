import { roles } from '../models/Role';
import User from '../models/User';

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user)
            return res.status(400).json({ 
                msg: 'The user already exists' 
            });
        const email = await User.findOne({ email: req.body.email });
        if (email)
            return res.status(400).json({ 
                msg: 'The email already exists' 
            });
        next();
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const checkRolesExisted = (req, res, nex) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if(!roles.includes(req.body.roles[i])){
                return res.status(400).json({
                    msg: `Role ${req.body.role[i]} doesn't exists.`
                })
            };
        };
    };
    next();
};