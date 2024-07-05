const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUpController = async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const emailExists = await User.findOne({ email });

  if (emailExists) {
    res.status(400).json({
      errMessage: "Email Already Exists",
    });
  } else {
    let newUser = await User.create({
      name,
      email,
      password: hashPassword,
    });

    const user = {
      id: newUser._id,
      email: newUser.email,
    };

    const jsonwebtoken = jwt.sign(user, process.env.SECRET_KEY);

    res.status(201).json({
      message: "User Created Successfully",
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      token: jsonwebtoken,
    });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const emailExists = await User.findOne({ email });

  if (!emailExists) {
    res.status(400).json({
      errMessage: "Invalid Credentials",
    });
  } else {
    const comparePassword = await bcrypt.compare(
      password,
      emailExists.password
    );

    if (!comparePassword) {
      res.status(400).json({
        errMessage: "Invalid Credentials",
      });
    } else {
      const user = {
        id: emailExists._id,
        email: emailExists.email,
      };

      const jsonwebtoken = jwt.sign(user, process.env.SECRET_KEY);

      res.status(200).json({
        message: "Login Success",
        id: emailExists._id,
        email: emailExists.email,
        token: jsonwebtoken,
      });
    }
  }
};

module.exports = { signUpController, loginController };
