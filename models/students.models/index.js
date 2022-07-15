/** @format */

const { pool } = require("../../database");

const getAll = async (filter = { type: "id", order: "ASC" }) => {
  const result = await pool.query(
    `SELECT * FROM Student ORDER BY ${filter.type} ${filter.order}`
  );

  return result.rows;
};

const getById = async (id) => {
  const result = await pool.query(`SELECT * FROM Student WHERE id = ${id}`);

  return result.rows;
};
const getAllClass = async (id) => {
  const result = await pool.query(
    `SELECT Subject.id , Subject.name, Classes.name ,Classes.id ,educationresult.result,educationresult.converttocharacter
    FROM Subject INNER JOIN Classes
    ON Classes.subject_id = subject.id
    INNER JOIN educationresult
    ON educationresult.class_id = classes.id
    WHERE educationresult.student_id = ${id}`
  );
  return result.rows;
};

const add = async (data) => {
  const result =
    await pool.query(`INSERT INTO Student (email, password, name, gender, student_id, cpa, scholarship, date) 
        VALUES ('${data.email}', '${data.password}', '${data.name}', ${data.gender}, '${data.student_id}', ${data.cpa}, ${data.scholarship}, '${data.date}')`);

  return result;
};

const update = async (data) => {
  const result = await pool.query(`UPDATE Student SET 
        email = '${data.email}', 
        password = '${data.password}', 
        name = '${data.name}', 
        gender = ${data.gender}, 
        student_id = '${data.student_id}', 
        cpa = ${data.cpa}, 
        scholarship = ${data.scholarship},
        date = '${data.date}'
        WHERE id = ${data.id}`);

  return result;
};

const remove = async (id) => {
  const result = await pool.query(`DELETE FROM Student WHERE id = ${id}`);
  return result;
};

const query = async (query) => {
  const result = await pool.query(query);

  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove,
  query,
  getAllClass,
};
