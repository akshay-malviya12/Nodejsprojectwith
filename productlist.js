const express = require("express");
const db = require("./database");
const router = express.Router();

router.get("/", (req, res) => {
  const query = "SELECT * FROM products";
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json(rows);
  });
});
module.exports = router;
