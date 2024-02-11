const express = require("express");
const db = require("./database");
const router = express.Router();

router.post("/", (req, resp) => {
  const { name, price, category, company, description } = req.body;
  const query =
    "INSERT OR REPLACE INTO products (name,price,category,company,description) VALUES (?,?,?,?,?)";

  db.run(query, [name, price, category, company, description], (err) => {
    if (err) {
      resp.status(500).json({ error: err.message });
      return;
    }

    if (this.lastID !== undefined) {
      resp.status(201).json({ message: "product created successfully" });
    } else {
      resp.status(200).json({ message: "product update successfully" });
    }
  });
});

module.exports = router;
