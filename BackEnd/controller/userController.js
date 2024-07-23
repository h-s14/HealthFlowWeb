import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";
import{ generateToken } from "../utils/jwTokens.js";

export const patientRegister = catchAsyncErrors(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    gender,
    dob,
    nic,
    role,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !password ||
    !gender ||
    !dob ||
    !nic ||
    !role
  ) {
    return next(new ErrorHandler("Please fill all the required fields!", 400));
  }
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already exists!", 400));
  }
  user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    password,
    gender,
    dob,
    nic,
    role,
  });
  generateToken(user, "User Registered!",200,res)
  
});


export const login = catchAsyncErrors(async (req, res, next)=>{
  const {email,password,role} = req.body;
  if(!email || !password || !role){
    return next(new ErrorHandler("Please Provide All Details!",400));
  }
  const user = await User.findOne({email}).select("+password");
  if(!user){
    return next(new ErrorHandler("Invalid  e-mail",400));
  }
  const isPasswordMatched = await user.passwordChecker(password);
  if(!isPasswordMatched){
    return next(new ErrorHandler("Invalid Password / ",400));
  }
  if(role!== user.role){
    return next(new ErrorHandler("Role Invalid",400));
  }
  generateToken(user, "Login Successfull!",200,res)
});

export const addNewAdmin = catchAsyncErrors(async(req,res,next)=>{
  const{
  firstName,
    lastName,
    email,
    phone,
    password,
    gender,
    dob,
    nic,
  } = req.body;
  if(
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !password ||
    !gender ||
    !dob ||
    !nic 
  ){
    return next(new ErrorHandler("Please Fill all the details!",400));
  }
  const isRegistered = await User.findOne({email});
  if(isRegistered){
    return next ( new ErrorHandler(`${isRegistered.role} already exists!`));
  }
  const admin = await User.create({firstName,
    firstName,
    lastName,
    email,
    phone,
    password,
    gender,
    dob,
    nic,
    role: "Admin",
  });
  res.status(200).json({
    success: true,
    message: "New Admin registered!",
  })
});