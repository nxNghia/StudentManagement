const { pool } = require('../../database');

const query = async (query) => {
    const result = await pool.query(query);

    return result;
}

module.exports = {
    query
};
