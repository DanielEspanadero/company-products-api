import User from "../models/User";

export const signUp = (req, res) => {
    res.status(200).json({
        msg: 'Sign Up'
    })
};

export const signIn = (req, res) => {
    res.status(200).json({
        msg: 'Sign In'
    })
};