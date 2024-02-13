
const express = require("express");
const router = express.Router();
const productRouter = require("./product");
const productupdateRouter = require("./productupdate");
const productlistRouter = require("./productlist");
const productdeleteRouter = require("./productdelete");
const getrandomproductRouter = require("./getsingleproduct");
const searchRouter = require("./search");
const adminRouter = require("./admin");
const mfaRouter = require("./mfa");
const jwt = require("jsonwebtoken");
const secretKey = "secretkey";
const db = require("./database");

// // Middleware to authenticate user
function authenticateUser(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }
  const token = authHeader.split(" ")[1];
  console.log("token", token);
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, secretKey, (err, decoded) => {
    console.log("error", err);
    if (err) return res.status(401).json({ message: err.message });
    req.user = decoded;
    next();
  });
}
// // Middleware to authorize user based on role
function authorizeUser(type) {
  return (req, res, next) => {
    const { role } = req.user;
    console.log("roles", role, "typess", type);
    if (!role.includes(type)) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    next();
  };
}

// Middleware to check if token is valid by querying the database
const checkTokenValidity = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }
  const token = authHeader.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  const sql = "SELECT * FROM usersAuths WHERE token = ?";
  db.get(sql, [token], (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
    if (!row) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = row; // Set the user information from the database row
    next();
  });
};

router.use(
  "/product",
  authenticateUser,
  authorizeUser(["admin", "user"]),
  productRouter,
);
router.use(
  "/updateProduct/:id",
  authenticateUser,
  authorizeUser(["admin", "user"]),
  productupdateRouter,
);
router.use(
  "/productlist",
  authenticateUser,
  authorizeUser(["admin", "user"]),
  productlistRouter,
);
router.use("/", getrandomproductRouter);
/*only admin delete product*/
router.use(
  "/productdelete/:id",
  authenticateUser,
  authorizeUser(["admin"]),
  productdeleteRouter,
);
/*Both search and admibnRouter not complete start*/
router.use("/search", searchRouter);
router.use("/adminget", adminRouter);
/* end */
router.use("/mfaverify", mfaRouter);

module.exports = router;
