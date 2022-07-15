const { pool } = require("../../database");

const getAll = async (filter = { type: "id", order: "ASC" }) => {
  const result = await pool.query(
    `SELECT * FROM Subject ORDER BY ${filter.type} ${filter.order}`
  );

  return result.rows;
};

const getById = async (id) => {
  const result = await pool.query(`SELECT * FROM Subject WHERE id = ${id}`);

  return result.rows;
};

const getAllClass = async (id) => {
  const result = await pool.query(
    `SELECT Subject.id , Subject.name, Classes.name ,Classes.id  FROM Subject INNER JOIN  Classes ON Classes.subject_id = subject.id WHERE subject.id = ${id}`
  );
  return result.rows;
};

const add = async (data) => {
  const result =
    await pool.query(`INSERT INTO Subject (name, faculty, classes, credit) 
        VALUES ('${data.name}', ${data.faculty}, ${data.classes}, ${data.credit})`);

  return result;
};

const update = async (data) => {
  const result = await pool.query(`UPDATE Subject SET 
        name = '${data.name}', 
        faculty = ${data.faculty}, 
        classes = ${data.classes}, 
        credit = ${data.credit} 
        WHERE id = ${data.id}`);

  return result;
};

const remove = async (id) => {
  const result = await pool.query(`DELETE FROM Subject WHERE id = ${id}`);

  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove,
  getAllClass,
};
