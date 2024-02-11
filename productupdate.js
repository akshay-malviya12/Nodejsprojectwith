const express = require("express");
const db = require("./database");
const router = express.Router();

router.put("/", (req, resp) => {
  const { name, price, category, company, description } = req.body;
  const query =
    "UPDATE products SET name=?,price=?,category=?,company=?,description=? WHERE id=?";
  db.run(
    query,
    [name, price, category, company, description, req.body.id],
    (err) => {
      if (err) {
        resp.status(500).json({ error: err.message });
        return;
      }
      resp.status(200).json({ message: "product update successfully" });
    },
  );
});
module.exports = router;
