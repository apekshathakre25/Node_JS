const express = require("express");
const userRouter = require("./routes/user");
const { connectToDb } = require("./connection");
const { logReqRes } = require("./middleware/user");
const app = express();
const port = 5001;

//connection
connectToDb("mongodb://127.0.0.1:27017/userData").then(() => {
  console.log("MongoDb Connected");
});

app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));
app.use("/api/user", userRouter);
app.listen(port, () => console.log("server started"));
