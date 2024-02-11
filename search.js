const express = require("express");
const db = require("./database");
const router = express.Router();
// Search endpoint
router.get("/", (req, res) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ message: "Missing search query" });
  }

  const searchQuery = `%${query}%`;
  const sql = "SELECT * FROM userAuths WHERE name LIKE ?";

  db.all(sql, [searchQuery], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }

    res.json({ results: rows });
  });
});

module.exports = router;
