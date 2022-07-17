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
    `SELECT Subject.id , Subject.name, Classes.name as className ,Classes.id as classId ,educationresult.result,educationresult.converttocharacter
    FROM Subject INNER JOIN Classes
    ON Classes.subject_id = subject.id
    INNER JOIN educationresult
    ON educationresult.class_id = classes.id
    WHERE educationresult.student_id = ${id}`
  );
  return result.rows;
};
const getAllClassAvailable = async (id) => {
  const result = await pool.query(
    `SElect * from classes where id NOT IN (SELECT classes.id 
    FROM public.educationresult INNER JOIN public.classes  ON  public.educationresult.class_id =public.classes.id
    where educationresult.student_id = ${id})`
  );
  return result.rows;
};

const subjectRegister = async (data) => {
 
  const result =
    await pool.query(`INSERT INTO educationResult (student_id,subject_id) 
        VALUES (${data.student_id}, ${data.subject_id})`);

  return result;
};

const classRegister = async (data) => {
 
  const result =
    await pool.query(`UPDATE educationResult SET class_id=${data.class_id}
    WHERE student_id= ${data.student_id} AND subject_id=${data.subject_id} 
    AND class_id IS NULL AND result IS NULL AND converttocharacter IS NULL`);
    if (result.rowCount === 0){
      await pool.query(`INSERT INTO educationResult (student_id,class_id,subject_id)VALUES (${data.student_id},${data.class_id},${data.subject_id})`);
    }
  return result;
  
};

const Mark = async (data) => {
  console.log(`UPDATE educationResult SET result = ${data.result}, converttocharacter = '${data.converttocharacter}'
  WHERE student_id= ${data.student_id} AND subject_id=${data.subject_id} AND class_id=${data.class_id} `);
  const result =
    await pool.query(`UPDATE educationResult SET result = ${data.result}, converttocharacter = '${data.converttocharacter}'
    WHERE student_id= ${data.student_id} AND subject_id=${data.subject_id} AND class_id=${data.class_id} `);
   
  return result;
  
};

const cancelSubjectRegister = async (data) => {
  const result = await pool.query(`DELETE FROM educationresult 
    WHERE student_id= ${data.student_id} AND subject_id=${data.subject_id} 
    AND class_id IS NULL AND result IS NULL AND converttocharacter IS NULL
    `);
  return result;
};

const cancelClassRegister = async (data) => {
  const result = await pool.query(`UPDATE  educationresult SET class_id = NULL
    WHERE student_id= ${data.student_id} AND subject_id=${data.subject_id} 
    AND class_id=${data.class_id}  AND result IS NULL AND converttocharacter IS NULL
    `);
  return result;
};

const add = async (data) => {
  const result =
    await pool.query(`INSERT INTO Student (email, password, name, gender, student_id, cpa, scholarship, date) 
        VALUES ('${data.email}', '${data.password}', '${data.name}', ${data.gender}, '${data.student_id}', ${data.cpa}, ${data.scholarship}, '${data.date}')`);

  return result;
};

const update = async (data, updatePassword) => {
  const passwordUpdateQuery = updatePassword ? `password = '${data.password}', ` : '';
  const result = await pool.query(`UPDATE Student SET 
        email = '${data.email}', 
        ${passwordUpdateQuery}
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
  getAllClassAvailable,
  subjectRegister,
  classRegister,
  cancelSubjectRegister,
  cancelClassRegister,
  Mark,
};
