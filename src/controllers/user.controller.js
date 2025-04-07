import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { User } from '../models/user.model.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/ApiResponse.js';
//hello

const registerUser = asyncHandler(async (req, res) => {
  // get user details from fontend
  // give access to the user if details valid - not empty
  // check if user already exists: username , email
  // check for images, check for avatar
  // upload them to cloundinary, avatar
  // create user object - create entry in db (.create)
  // remove password and refresh token field from response
  // check for user creation
  // return response

  const { fullName, email, username, password } = req.body;
  console.log('email: ', email);

  // if field trim hone ke baad bhi empty string hai then throw a new api error
  if (
    [fullName, email, username, password].some((field) => field?.trim() === '')
  ) {
    throw new ApiError(400, 'All fields are requried');
  }
  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });
  // User.findOne if username or email exists throw an error that username or email already exists

  if (existedUser) {
    throw new ApiError(409, 'User with email or userName already exists');
  }

  // middleware adds more fieds in req(request)
  const AvatarLocalPath = req.files?.avatar[0]?.path;
  const CoverImageLocalOath = req.files?.converImage[0]?.path;

  if (!AvatarLocalPath) {
    throw new ApiError(400, 'Avatar file is required');
  } else if (!CoverImageLocalOath) {
    throw new ApiError(400, 'CoverImage file is required');
  }

  const avtar = await uploadOnCloudinary(AvatarLocalPath);
  const CoverImage = await uploadOnCloudinary(CoverImageLocalOath);

  if (!avtar) {
    throw new ApiError(400, 'Avatar file is required');
  }

  const user = await User.create({
    fullName,
    avtar: avatar.url,
    CoverImage: CoverImage?.url || '', // if coverImage is not there pass an empty string
    email,
    password,
    username: username.toLowerCase(),
  });
  const createdUser = await User.findById(user._id).select(
    '-password -refreshToken'
  );

  if (createdUser) {
    throw new ApiError(500, 'Something went wrong while registering the user');
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, 'User registered successfully'));
});

export { registerUser };
