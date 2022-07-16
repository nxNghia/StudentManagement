const Common = require('../../models/common.models');

const getAllFaculties = async (request, response) => {
    try {
        const query = 'SELECT * FROM Faculty';

        const result = await Common.query(query);

        response.status(200).send(result.rows);
    } catch (err) {
        response.status(400).send({ message: 'Failed to get all classes', ...err });
    }
}

module.exports = {
    getAllFaculties
};
