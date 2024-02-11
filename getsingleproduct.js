const express = require("express");
const db = require("./database");
const router = express.Router();

router.get("/productnew/:id", (req, resp) => {
  const productId = req.params.id;

  const query = "SELECT * FROM products WHERE id = ?";
  db.get(query, [productId], (err, row) => {
    if (err) {
      resp.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      resp.status(200).json({ message: "product not found" });
      return;
    }
    resp.json(row);
  });
});
module.exports = router;
