const Signup = require("../models/User");
const { registerUser } = require("../controllers/auth");

// these are going to be controllers fundtion of the user.sj

const Createuser = async (req, res, next) => {
  const { Email, password } = req.body;

  try {
    // Call registerUser function from the auth controller to hash the password
    const hash = await registerUser(req, res, next);

    // Create a new user with the hashed password
    const newUser = new Signup({
      Email,
      password: hash,
    });

    // Save the user to the database
    await newUser.save();

    return res.status(201).json({ user: newUser });
  } catch (err) {
    console.error(err);
    // Use next to pass the error to Express's error handling middleware
    next(err);
  }
};

const DeleteUser = async (req, res) => {
  const id = req.params.id;

  let user;

  try {
    user = Signup.findByIdAndDelete(id);

    if (!user) {
      return res.status(500).json({ message: "User does not exist" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await Signup.find();

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getbyid = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await Signup.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  Createuser,
  DeleteUser,
  getAll,
  getbyid,
};
