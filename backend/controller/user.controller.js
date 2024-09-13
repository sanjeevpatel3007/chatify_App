import User from "../models/user.models.js";
import bcrypt from 'bcryptjs'
import createTokenAndSaveCookie from "../jwt/generateToken.js"

const signup = async (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;

  try {

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" })
    }
    const user = await User.findOne({ email });
    if (user) {
      // console.log("Checking if user exists...");

      return res.status(400).json({
        error: "Email already exists"

      })

    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({
      fullname,
      email,
      password: hashedPassword,
    })

    await newUser.save();
    if (newUser) {
      createTokenAndSaveCookie(newUser._id, res);
      res.status(201).json({
        message: "User created successfully",
        user:{
        _id:newUser._id,
        fullname:newUser.fullname,
        email:newUser.email
        }
      })
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }



}
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    const user = await User.findOne({ email });

    // Handle case where the email doesn't exist
    if (!user) {
      return res.status(400).json({ message: "Email does not exist massage ...backend se aa rha" });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password ... massage backend se aa rhaa" });
    }

    // If login is successful, generate token and send user data
    createTokenAndSaveCookie(user._id, res);
    res.status(200).json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    // Catch any server error and send a meaningful response
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("jwt")
    res.status(201).json({ message: "User logout successfully" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error" })
  }
}

const allUsers= async(req,res)=>{
  try {
    const loggedInUser=req.user._id;
      const filteredUsers=await User.find({_id:{$ne:loggedInUser}}).select("-password");
      res.status(200).json({
        filteredUsers,
      })
  } catch (error) {
    console.log("error in alluser controller " +error);
  }
}


export default { signup, login, logout ,allUsers};