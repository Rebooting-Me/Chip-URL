const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpiresIn } = require('../config/jwtConfig')

// Function for user signup
const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Create a new user instance
    const user = new User({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    });

    // Save the user to the database
    await user.save();

    // Generate a JSON Web Token (JWT)
    const token = jwt.sign({ userId: user._id }, jwtSecret, jwtExpiresIn);

    // Return the token and user information to the client
    res.json({ token, user });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Function for user login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare the provided password with the stored password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate a JSON Web Token (JWT)
    const token = jwt.sign({ userId: user._id }, "your-secret-key");

    // Return the token and user information to the client
    res.json({ token, user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Function for user logout (clearing the token on the client-side)
const logout = (req, res) => {
  // Clear the token on the client-side (e.g., remove from local storage or cookies)
  res.json({ message: "Logout successful" });
};

module.exports = {
  signup,
  login,
  logout,
};
