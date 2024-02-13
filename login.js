const express = require("express");
const db = require("./database");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const nodeeamiler = require("nodemailer");
// const speakeasy = require("speakeasy");
//for both receive
// const {sendEmailForVerify, generateRandomcodeforotp        }= require("./nodemailer");
const { sendEmailForVerify } = require("./nodemailer");
const { generateRandomcodeforotp } = require("./generateRandom");

// Secret key for JWT
const secretKey = "secretkey";

// Login route with multi-factor authentication
router.post("/", (req, res) => {
  const { email, password, verificationcode } = req.body;
  console.log(email, password, verificationcode);
  console.log("email", email);
  const query =
    "SELECT usersAuths.*,OTPVarifications.* FROM usersAuths INNER JOIN OTPVarifications ON usersAuths.email=OTPVarifications.email WHERE usersAuths.email = ? ";

  db.get(query, [email], (err, user) => {
    if (err) {
      console.log("errorsssss", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    if (!user) {
      return res.status(401).json({ message: "Invalid email " });
    }
    //check if the user is verification code is correct.
    if (user.verificationcode !== verificationcode) {
      return res.status(401).json({ message: "Invalid verification code" });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        // Handle error
        console.error(err);
      } else if (result) {
        // Passwords match

        // Perform MFA here, send verification code to email/phone and verify it
        const token = jwt.sign(
          { id: user.name.length, email: user.email, role: user.type },
          secretKey,
          {
            expiresIn: "1h",
          },
        );

        db.run(
          "UPDATE usersAuths SET token = ? WHERE email = ?",
          [token, email],
          (err) => {
            if (err) {
              return res
                .status(500)
                .json({ message: "Internal1 server error" });
            }
            console.log("usertoken", user);
            res.status(200).json({ message: "Login successful", token });
          },
        );
      } else {
        // Passwords don't match

        res.status(500).json({ message: "Login failed" });
      }
    });

    //  res.json({ token: token, user: user });
  });
});

module.exports = router;

