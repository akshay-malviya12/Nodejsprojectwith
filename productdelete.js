const express = require("express");
const db = require("./database");
const router = express.Router();

router.delete("/", (req, resp) => {
  const query = "DELETE FROM products WHERE id=?";
  db.run(query, [req.body.id], (err) => {
    if (err) {
      resp.status(500).json({ error: err.message });
      return;
    }
    resp.status(200).json({ message: "product deleted successfully" });
  });
});
module.exports = router;
