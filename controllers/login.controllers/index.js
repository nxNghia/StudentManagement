/** @format */
const bcrypt = require("bcrypt");
const Student = require("../../models/students.models");
const Admin = require("../../models/admin.models");
const LogIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const query_student = `SELECT * FROM Student WHERE email = '${email}';`;
    const user = await Student.query(query_student);
    if (user.rows[0]) {
      const valid = await bcrypt.compare(
        password,
        user.rows[0].password
      );
      if (valid) {
        res.cookie("user", {
          id: user.rows[0].id,
          type: "student",
        });
        res.status(200).send({
          message: "Student login",
          user: user.rows[0],
        });
      } else {
        res.status(400).send({
          message: "Wrong password!",
          email: email,
        });
      }
    } else {
      const query_admin = `SELECT * FROM Admin WHERE email = '${email}';`;
      const user = await Admin.query(query_admin);
      if (user.rows[0]) {
        const valid = await bcrypt.compare(
          password,
          user.rows[0].password
        );
        if (valid) {
          res.cookie("user", {
            id: user.rows[0].id,
            type: "admin",
          });
          res.status(200).send({
            message: "Admin login",
            user: user.rows[0],
          });
        } else {
          res.status(400).send({
            message: "Wrong password!",
            email: email,
          });
        }
      } else {
        res.status(401).send({
          message: "Account does not exist!",
          email: email,
        });
      }
    }
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .send({ message: "Something went wrong!!!" });
  }
};

module.exports = { LogIn };
