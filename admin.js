const express = require("express");
const db = require("./database");
const router = express.Router();
const jwt = require("jsonwebtoken");

// router.get("/", (req, res) => {
//   email = "usersurname@example112.com";
//   const query = "SELECT * FROM usersAuths WHERE email = ? ";
//   db.get(query, [email], (err, user) => {
//     if (err) {
//       return res.status(500).json({ message: "Internal server error" });
//     } else {
//       res.json({ user: user });
//     }
//   });
// });
// module.exports = router;

router.get("/", (req, res) => {
  // Define the email you want to search for
  const email = "usersurname@example88.com";

  // Prepare the SQL query
  const query = `
    SELECT * 
    FROM usersAuths 
    WHERE email = ?
`;

  // Execute the query with the email parameter
  db.get(query, [email], (err, row) => {
    if (err) {
      console.error(err.message);
      return;
    }
    if (row) {
      // Handle the result here
      console.log(row);
    } else {
      console.log("No user found with that email");
    }
  });

  // Close the database connection when finished
  // db.close();
});
module.exports = router;
