// const express = require("express");
// const db = require("./database");
// const router = express.Router();
// const jwt = require("jsonwebtoken");

// // const express = require("express");
// // const jwt = require("jsonwebtoken");
// // const db = require("../database/db");

// // const app = express();
// // app.use(express.json());

// // Secret key for JWT
// const secretKey = "yourSecretKey";

// // Login route with multi-factor authentication
// router.post("/", (req, res) => {
//   const { email, password } = req.body;
//   console.log(email, password);
//   const query = "SELECT * FROM usersAuths WHERE email = ? AND password = ?";
//   db.get(query, [email, password], (err, user) => {
//     if (err) {
//       return res.status(500).json({ message: "Internal server error" });
//     }
//     if (!user) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }
//     // Perform MFA here, send verification code to email/phone and verify it
//     const token = jwt.sign(
//       { id: user.name.length, email: user.email, role: user.type },
//       secretKey,
//     );
//     db.run(
//       "update usersAuths set token = ? where email = ?",
//       [token, email],
//       (err) => {
//         if (err) {
//           return res.status(500).json({ message: "Internal server error" });
//         } else {
//           db.run(
//             "selec * from usersAuths where email = ?",
//             [email],
//             (err, row) => {
//               if (err) {
//                 return res
//                   .status(500)
//                   .json({ message: "Internal server error" });
//               }
//             console.log('row', row)
//             },
//           );
//           return res
//             .status(200)
//             .json({ message: "Login successful", token: token });
//         }
//       },
//     );
//     // res.json({ token: token, user: user });
//   });
// });

// module.exports = router;
