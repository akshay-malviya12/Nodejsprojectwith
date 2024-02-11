// // // const express = require("express");
// // // const bodyParser = require("body-parser");
// // // const signupRouter = require("./routes/signup");

// // // const app = express();
// // // const PORT = process.env.PORT || 3000;
// // // app.use(bodyParser.json());
// // // app.use("/api/signup", signupRouter);

// // // app.listen(PORT, () => {
// // //   console.log(`Server is running on port ${PORT}`);
// // // });

// // // //connect sql lite database

// // //correct
// // const express = require("express");
// // const bodyParser = require("body-parser");
// // const signupRouter = require("./signup");
// // const cors = require("cors");

// // const app = express();
// // const PORT = process.env.PORT || 3000;
// // app.use(bodyParser.json());
// // app.use(cors());
// // // app.use((req, resp, next) => {
// // //   resp.setHeader("Access-Control-Allow-Origin", "*");
// // //   resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
// // //   resp.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
// // //   next();
// // // });

// // app.use((req, res, next) => {
// //   res.header(
// //     "Access-Control-Allow-Origin",
// //     "https://d624fd28-0825-4703-b82a-8c31348987c9-00-1xo27x4rhyu4s.pike.repl.co",
// //   );
// //   res.header(
// //     "Access-Control-Allow-Headers",
// //     "Origin, X-Requested-With, Content-Type, Accept",
// //   );
// //   resp.setHeader("Access-Control-Allow-Origin", "*");
// //   resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
// //   resp.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");

// //   next();
// // });
// // app.use("/register", signupRouter);

// // // app.post("/register", (req, res) => {
// // //   // Here you can access the request body
// // //   console.log("hit this points b y reacjs");
// // //   const requestBody = req.body;
// // //   console.log("req", requestBody);
// // //   // Process the request data as needed
// // //   // For example, you can save it to a database or perform some other operation

// // //   // Send a response back to the client
// // //   res.send("POST request received");
// // // });

// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });

// // // //connect sql lite database

// // // const express = require("express");
// // // const app = express();

// // // // Define the route and method for handling POST requests
// // // app.post("/register", (req, res) => {
// // //   // Here you can access the request body
// // //   const requestBody = req.body;
// // //   console.log("req", requestBody);
// // //   // Process the request data as needed
// // //   // For example, you can save it to a database or perform some other operation

// // //   // Send a response back to the client
// // //   res.send("POST request received");
// // // });

// // // // Start the server
// // // const PORT = process.env.PORT || 3000;
// // // app.listen(PORT, () => {
// // //   console.log(`Server is listening on port ${PORT}`);
// // // });

// //index pages.
// // const express = require("express");
// // const bodyParser = require("body-parser");
// // const signupRouter = require("./signup");
// // const loginRouter = require("./login");
// // const db = require("./database");
// // // const productRouter = require("./product");
// // // const productupdateRouter = require("./productupdate");
// // // const productlistRouter = require("./productlist");
// // // const productdeleteRouter = require("./productdelete");
// // // const getrandomproductRouter = require("./getsingleproduct");
// // const routerALL = require("./routerALL");
// // const cors = require("cors");

// // const app = express();
// // const PORT = process.env.PORT || 3000;
// // app.use(bodyParser.json());
// // app.use(cors());
// // // app.use((req, resp, next) => {
// // //   resp.setHeader("Access-Control-Allow-Origin", "*");
// // //   resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
// // //   resp.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
// // //   next();
// // // });

// // app.use((req, res, next) => {
// //   res.header(
// //     "Access-Control-Allow-Origin",
// //     "https://d624fd28-0825-4703-b82a-8c31348987c9-00-1xo27x4rhyu4s.pike.repl.co",
// //   );
// //   res.header(
// //     "Access-Control-Allow-Headers",
// //     "Origin, X-Requested-With, Content-Type, Accept",
// //   );
// //   // resp.setHeader("Access-Control-Allow-Origin", "*");
// //   // resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
// //   // resp.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");

// //   next();
// // });
// // app.use("/register", signupRouter);
// // app.use("/login", loginRouter);
// // // app.use("/product", productRouter);
// // // app.use("/updateProduct/:id", productupdateRouter);
// // // app.use("/productlist", productlistRouter);
// // // app.use("/getRandomProduct/:id", getrandomproductRouter);
// // // app.use("/productdelete/:id", productdeleteRouter);
// // app.use("/", routerALL);

// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });

// // // //connect sql lite database
// const authorize=(()=>{
  
//   const secret = process.env.JWT_SECRET;
//   return (req,res,next)=>{
//     const token = req.headers.authorization;
//     if(token){
//       jwt.verify(token,secret,(err,decoded)=>{
//         if(err){
//           res.status(401).json({message:"unauthorized"});
//         }else{
//           req.decoded=decoded;
//           next();
//         }
//       })
//     }else{
//       res.status(401).json({message:"unauthorized"});
//     }
//   }
// })();




// const express = require("express");
// const db = require("./database");
// const router = express.Router();
// const jwt = require("jsonwebtoken");
// // router.post("/", (req, resp) => {
// //   const { email, password } = req.body;
// //   const query = "SELECT * FROM usersnew WHERE email = ? AND password = ?";
// //   db.get(query, [email, password], (err, row) => {
// //     if (err) {
// //       resp.status(500).json({ error: err.message });
// //     } else {
// //       if (row) {
// //         resp.json({ status: 200, message: "login successfull", user: row });
// //       } else {
// //         resp.status(401).json({ error: "invalid credentials" });
// //       }
// //     }
// //   });
// // });

// // const express = require("express");
// // const jwt = require("jsonwebtoken");
// // const db = require("../database/db");

// // const app = express();
// // app.use(express.json());

// // Secret key for JWT
// const secretKey = "yourSecretKey";

// // // Middleware to authenticate user
// // function authenticateUser(req, res, next) {
// //   const token = req.headers.authorization;
// //   if (!token) return res.status(401).json({ message: "No token provided" });

// //   jwt.verify(token, secretKey, (err, decoded) => {
// //     if (err) return res.status(401).json({ message: "Invalid token" });
// //     req.user = decoded;
// //     next();
// //   });
// // }

// // // Middleware to authorize user based on role
// // function authorizeUser() {
// //   return (req, res, next) => {
// //     const { role } = req.user;
// //     if (!role) {
// //       return res.status(403).json({ message: "Unauthorized" });
// //     }
// //     next();
// //   };
// // }

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
//     // const token = jwt.sign(
//     //   { id: user.id, email: user.email, role: user.role },
//     //   secretKey,
//     // );
//     res.json({ user: user });
//   });
// });

// module.exports = router;
