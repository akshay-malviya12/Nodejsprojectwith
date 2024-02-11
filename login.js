const express = require("express");
const db = require("./database");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Secret key for JWT
const secretKey = "secretkey";

// Login route with multi-factor authentication
router.post("/", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const query = "SELECT * FROM usersAuths WHERE email = ? AND password = ?";
  db.get(query, [email, password], (err, user) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
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
          return res.status(500).json({ message: "Internal1 server error" });
        }
        console.log("usertoken", user);
        res.status(200).json({ message: "Login successful", token });
      },
    );

    //  res.json({ token: token, user: user });
  });
});

module.exports = router;
