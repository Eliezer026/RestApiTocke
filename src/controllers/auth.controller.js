import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Roles";

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const newUser = new User({
    username: username,
    email: email,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.role = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.role = [role._id];
  }

  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400,
  });
  console.log(savedUser.role + "my _idRoles");
  res.json({ token });
};

export const signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "role"
  );
  if (!userFound) {
    return res.json({ message: "User not found" });
  }

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPassword) {
    return res.status(401).json({ token: null, message: "Password incorrect" });
  }

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400,
  });

  const data = {
    verified: true,
    token: token,
    email: req.body.email,
  };

  res.send(data);

  //console.log(userFound);
  //console.log(userFound.role);
};
