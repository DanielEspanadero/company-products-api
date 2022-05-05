import { Schema, model } from 'mongoose';

export const roles = ['user', 'admin', 'moderator'];

const RoleSchema = new Schema({
    name: String
},
{
    versionKey: false
});

export default model('Role', RoleSchema);