import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bycrypt from 'bcrypt';

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    avatar: {
      type: String, // cloudinary url
      required: true,
    },

    coverImage: {
      type: String,
    },

    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Video',
      },
    ],

    password: {
      type: String,
      required: [true, `Password is required`],
    },

    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bycrypt.hash(this.password, 10); // rounds (10) - how many times password will hash for more security
    next();
  }
  return next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bycrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function(){
 return  jwt.sign(
    {
      _id: this._id,
      email: this.email,
      userName: this.userName
      fullName: this.fullName
    // defined in schema      // this. is coming from database
    }

    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}
userSchema.methods.generateRefreshToken = function(){
  return  jwt.sign(
    {
      _id: this._id,
      email: this.email,
      userName: this.userName
      fullName: this.fullName
    // defined in schema      // this. is coming from database
    }

    process.env.REFRESH_TOKEN-SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}

export const User = mongoose.model('User', userSchema);
