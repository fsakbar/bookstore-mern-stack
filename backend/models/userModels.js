import mongoose from 'mongoose'
import bcrypt from "bcryptjs"

const userSchema =  mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email : {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: true,
    }
)
// userSchema.pre("save", async function () {
//     this.password = await bcrypt.hash(this.password, 12);
//   });

export const User = mongoose.model('users', userSchema); 