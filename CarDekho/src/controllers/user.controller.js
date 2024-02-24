import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userController = {
  async registerUser(req, res) {
    try {
      const { username, user_email, fullName, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ user_email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = new User({
        username,
        user_email,
        fullName,
        password: hashedPassword,
      });

      // Save the user
      await newUser.save();

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async loginUser(req, res) {
    try {
      const { user_email, password } = req.body;

      // Check if user exists
      const user = await User.findOne({ user_email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Check if password is correct
      const isPasswordCorrect = await user.isPasswordCorrect(password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Generate access token
      const accessToken = user.generateAccessToken();

      // Generate refresh token
      const refreshToken = user.generateRefreshToken();

      res.status(200).json({ accessToken, refreshToken });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async refreshAccessToken(req, res) {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        return res.status(401).json({ message: "Refresh token is required" });
      }

      // Verify the refresh token
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.status(403).json({ message: "Invalid refresh token" });
        }

        // Generate new access token
        const accessToken = jwt.sign(
          { _id: user._id, email: user.email, username: user.username, fullName: user.fullName },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
        );

        res.status(200).json({ accessToken });
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async logoutUser(req, res) {
    // Perform any necessary logout operations, such as invalidating tokens
    // You may not need to implement this if you are using stateless JWT authentication
    res.status(200).json({ message: "Logged out successfully" });
  }
};

export default userController;
