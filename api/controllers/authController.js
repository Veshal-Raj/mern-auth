import User from "../models/UserModal.js";
import bcryptjs from "bcrypt";

export const signup = async (req, res, next) => {
  // console.log(req.body)
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successflly" });
  } catch (error) {
    next(error);
  }
};
