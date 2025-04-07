<<<<<<< HEAD
import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bycrypt from 'bcrypt';
=======
import mongoose, { Schema } from "mongoose";
import { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from "bcrypt"
>>>>>>> 2c1a56955f3282938aff2c48c49bdbd80b74cf72

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
<<<<<<< HEAD
      trim: true,
      index: true,
=======
      lowerCase: true,
      trim: true,
      index: true,
      // with index it will become searchable in database like search the userName
>>>>>>> 2c1a56955f3282938aff2c48c49bdbd80b74cf72
    },

    email: {
      type: String,
      required: true,
      unique: true,
<<<<<<< HEAD
      trim: true,
    },

=======
      lowerCase: true,
      trim: true,
    },
>>>>>>> 2c1a56955f3282938aff2c48c49bdbd80b74cf72
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
<<<<<<< HEAD

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
=======
    avatar: {
      type: String, // use cloundinary url
      required: true,
    },
    coverImage: {
      type: String,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
>>>>>>> 2c1a56955f3282938aff2c48c49bdbd80b74cf72
      },
    ],

    password: {
      type: String,
      required: [true, `Password is required`],
    },

    refreshToken: {
      type: String,
    },
<<<<<<< HEAD
=======

    id: {
        type: String
    }
>>>>>>> 2c1a56955f3282938aff2c48c49bdbd80b74cf72
  },
  { timestamps: true }
);

<<<<<<< HEAD
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
=======

// pre hook - run the programme just before executing the code
userSchema.pre("save", async function (next){

    if(this.isModified("password")){

        this.password = bcrypt.hash(this.password,10 ) // rounds as number
        next()
    }
})

userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password)
}

// arrow function does not support this
userSchema.methods.generateAccessToken = function(){
    return JsonWebTokenError.sign({
        _id: this._id,
        email: this.email,
        userName: this.userName,
        fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return JsonWebTokenError.sign({
      
        },
        process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: process.env.REFRESH_TOKEN_EXPPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);
>>>>>>> 2c1a56955f3282938aff2c48c49bdbd80b74cf72
