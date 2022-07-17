const { pool } = require('../../database');

const getAll = async (filter = {type: 'id', order: 'ASC'}) => {
    const result = await pool.query(`SELECT * FROM Classes ORDER BY ${filter.type} ${filter.order}`);

    return result.rows;
}

const getById = async (id) => {
    const result = await pool.query(`SELECT * FROM Classes WHERE id = ${id}`);

    return result.rows;
}

const add = async (data) => {
    const result = await pool.query(`INSERT INTO Classes (name, teacher, students, end_date, subject_id, faculty_id) 
        VALUES ('${data.name}', ${data.teacher}, ${data.students}, '${data.end_date}', ${data.subject_id}, ${data.faculty_id})`);

    return result;
}

const update = async (data) => {
    const result = await pool.query(`UPDATE Classes SET 
        name = '${data.name}', 
        students = '${data.students}', 
        teacher = ${data.teacher}, 
        end_date = '${data.end_date}'
        WHERE id = ${data.id}`
    );

    return result;
}

const remove = async (id) => {
    const result = await pool.query(`DELETE FROM Classes WHERE id = ${id}`);

    return result;
}

const query = async (query) => {
    const result = await pool.query(query);

    return result;
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    remove,
    query
}
