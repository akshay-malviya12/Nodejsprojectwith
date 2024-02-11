const express = require("express");
const bodyParser = require("body-parser");
const signupRouter = require("./signup");
const loginRouter = require("./login");
const routerALL = require("./routerALL");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(
  cors({
    // origin: "https://replit.com/@akshaymalviya12/reactfrontend",
    // origin: "https://@akshaymalviya12.reactfrontend.repl.co",
    origin:
      "https://d624fd28-0825-4703-b82a-8c31348987c9-00-1xo27x4rhyu4s.pike.repl.co",
  }),
  // "https://d624fd28-0825-4703-b82a-8c31348987c9-00-1xo27x4rhyu4s.pike.repl.co",

  //"https://@akshaymalviya12.reactfrontend.repl.co"
);
app.options("/register", cors());
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin,'*'",
    //"https://d624fd28-0825-4703-b82a-8c31348987c9-00-1xo27x4rhyu4s.pike.repl.co",
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.use("/register", signupRouter);
app.use("/login", loginRouter);
app.use("/", routerALL);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// //connect sql lite database
