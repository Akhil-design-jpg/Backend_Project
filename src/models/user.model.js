import mongoose, { Schema } from "mongoose";
import { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true,
      trim: true,
      index: true,
      // with index it will become searchable in database like search the userName
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
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
      },
    ],

    password: {
      type: String,
      required: [true, `Password is required`],
    },

    refreshToken: {
      type: String,
    },

    id: {
        type: String
    }
  },
  { timestamps: true }
);


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
