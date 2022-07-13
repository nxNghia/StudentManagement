/** @format */

const Student = require("../../models/students.models");

const LogIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const query = `SELECT * FROM Student WHERE email = '${email}';`;
    const user = await Student.query(query);
    if (user.rows[0]) {
      if (user.rows[0].password === password) {
        res.status(200).send(user.rows[0]);
      } else {
        res.status(400).send({ message: "Wrong password!", email: email });
      }
    } else
      res.status(401).send({ message: "Account does not exist", email: email });
  } catch (err) {
    console.log(err)
    res.status(404).send({ message: "Something went wrong!!!" });
  }
};

module.exports = { LogIn };
