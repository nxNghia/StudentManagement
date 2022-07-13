/** @format */

const { pool } = require("../../database");

const getAll = async (filter = { type: "id", order: "ASC" }) => {
  const result = await pool.query(
    `SELECT * FROM Admin ORDER BY ${filter.type} ${filter.order}`
  );

  return result.rows;
};

const getById = async (id) => {
  const result = await pool.query(`SELECT * FROM Admin WHERE id = ${id}`);

  return result.rows;
};

const add = async (data) => {
  const result =
    await pool.query(`INSERT INTO Admin (email, password, name) 
        VALUES ('${data.email}', '${data.password}', '${data.name}')`);

  return result;
};

const update = async (data) => {
  const result = await pool.query(`UPDATE Admin SET 
        email = '${data.email}', 
        password = '${data.password}', 
        name = '${data.name}'`);

  return result;
};

const remove = async (id) => {
  const result = await pool.query(`DELETE FROM Admin WHERE id = ${id}`);

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
  query
};
