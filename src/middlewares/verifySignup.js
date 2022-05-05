import { roles } from "../models/Role";

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