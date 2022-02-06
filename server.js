const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const connectDB = require("./config/connectDB");
const adminRoutes = require("./routes/adminRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const studentRoutes = require("./routes/studentRoutes");
const passport = require("passport");


app.use(express.json());

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/admin", adminRoutes);
app.use("/teacher", teacherRoutes);
app.use("/student", studentRoutes);

connectDB();

require("dotenv").config({ path: "./config/.env" });
const port = process.env.PORT;
app.listen(port, (err) => {
  err
    ? console.log("there is an error on the server")
    : console.log(`the server is running well on ${port}`);
});






