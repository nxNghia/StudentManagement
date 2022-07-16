/** @format */

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const studentRouter = require("./routes/student.routes");
const subjectRouter = require("./routes/subject.routes");
const classRouter = require("./routes/class.routes");
const loginRouter = require("./routes/login.routes");
const adminRouter = require("./routes/admin.routes");
const commonRouter = require("./routes/common.routes");

const { poolDemo } = require("./database");

const port = process.env.PORT || 8000;

// test database connection
poolDemo().then((result) => console.log(result.rows[0]));

const app = express();
app.use(cors({ 
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
}));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.listen(port, () => console.log(`Running on port ${port}`));

app.use("/student", studentRouter);
app.use("/subject", subjectRouter);
app.use("/class", classRouter);
app.use("/login", loginRouter);
app.use("/admin", adminRouter);
app.use("/common", commonRouter);
