import { Schema, model } from 'mongoose';
import bcryptjs from 'bcryptjs';

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: 'Role',
        type: Schema.Types.ObjectId
    }]
},
    {
        timestamps: true,
        versionKey: false
    });

UserSchema.statics.encryptPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password, salt)
}

UserSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcryptjs.compare(password, receivedPassword);
};

export default model('User', UserSchema);