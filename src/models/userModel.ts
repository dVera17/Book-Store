import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, },
    email: { type: String, required: [true, "Provide a valid email"] },
    password: { type: String, required: [true, "Provide a valid password"] },
    name: { type: String, required: [true, "Provide a valid Name"] },
    phone: { type: String, required: [true, "Provide a valid Phone number"] },
    role: {
        type: String,
        required: [true, "Role is required"],
        enum: {
            values: ['customer', 'admin'],
            message: 'Role not allowed, Sent value: {VALUE}'
        }
    }
}, { versionKey: false });

const userModel = mongoose.model('users', userSchema);

export default userModel;