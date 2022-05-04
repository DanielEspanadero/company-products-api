import User from "../models/User";
import jsonwebtoken from "jsonwebtoken";
import config from "../config";

export const signUp = async (req, res) => {

    const { username, email, password, roles } = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password),
    });

    const saveUser = await newUser.save();

    const token = jsonwebtoken.sign({id: saveUser._id}, config.SECRET, {
        expiresIn: '4h'
    });

    res.status(200).json({
        token
    });
};

export const signIn = (req, res) => {
    res.status(200).json({
        msg: 'Sign In'
    });
};