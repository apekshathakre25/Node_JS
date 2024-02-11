const User = require("../models/user");

const handleAllUsers = async (req, res) => {
  const dbUsers = await User.find({});
  return res.json(dbUsers);
};

const getUserById = async (req, res) => {
  const userPerson = await User.findById(req.params.id);
  if (userPerson) {
    return res.json(userPerson);
  }
};

const updateUserById = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Nisha" });
  return res.json({ status: "Entry Updated Succesfully" });
};

const deleteUserById = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Entry Deleted success" });
};

const createNewUser = async (req, res) => {
  const body = req.body;
  if (!body || !body.email) {
    return res.status(400).json({ status: "empty" });
  }

  const newUser = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    profession: body.profession,
  });
  console.log(newUser);
  return res.status(201).json({ mesg: "success", id: newUser._id });
};

module.exports = {
  handleAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createNewUser,
};
