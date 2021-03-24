require("dotenv").config();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Confirmation = require("../models/confirmationModel");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

module.exports = {
  register: async (req, res) => {
    try {
      const { firstName, lastName, email, password, passwordCheck } = req.body;

      if (!firstName || !lastName || !email || !password || !passwordCheck) {
        return res.status(400).json({ msg: "All fields are required" });
      }

      if (passwordCheck.length < 8) {
        return res
          .status(400)
          .json({ msg: "Password must be longer than 8 characters" });
      }

      if (password !== passwordCheck) {
        return res.status(400).json({ msg: "Passwords do not match" });
      }

      const oldUser = await User.findOne({ email: email });

      if (oldUser) {
        return res.status(400).json({ msg: "Email already in use" });
      }

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      const newUser = new User({
        firstName,
        lastName,
        email,
        password: passwordHash,
      });

      const confirmationToken = new Confirmation({
        token: crypto.randomBytes(10).toString("hex"),
        authorId: newUser._id,
      });

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "GrooveIn2021@gmail.com",
          pass: process.env.EPASS,
        },
      });

      const mailOption = {
        from: "GrooveIn2021@gmail.com",
        to: newUser.email,
        subject: "Thank you for signing up",
        text: `Click to confirm http://localhost:3000/confirm_token/${confirmationToken.token}`,
      };

      transporter.sendMail(mailOption, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(
            `Email was sent with: http://localhost:3000/confirm_token/${confirmationToken.token} `
          );
        }
      });

      await confirmationToken.save();
      const savedNewUser = await newUser.save();
      res.json(savedNewUser);
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ msg: "All fields are required" });
      }

      const user = await User.findOne({ email: email });

      if (!user) {
        return res.status(400).json({ msg: "Email does not exist" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(400).json({ msg: "Incorrect password" });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      res.json({
        token,
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          confirmed: user.confirmed,
        },
      });
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.user);
      res.json({
        firstName: user.firstName,
        lastName: user.lastName,
        id: user._id,
      });
    } catch (err) {
      res.send(err.response);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.user);
      res.json(deletedUser);
    } catch (err) {
      res.send(err);
    }
  },
};
