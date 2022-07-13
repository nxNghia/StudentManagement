const Class = require('../../models/class.models');

const getAll = async (request, response) => {
    try {
        const filter = request.params.type ? { type: request.params.type, order: request.params.order } : undefined;

        const result = await Class.getAll(filter);

        response.status(200).send(result);
    } catch (err) {
        response.status(400).send({ message: 'Failed to get all classes', ...err });
    }
}

const getById = async (request, response) => {
    try {
        const class_id = request.params.id;

        const result = await Class.getById(class_id);

        if (result.length === 0) {
            response.status(400).send({ message: 'Class does not exist', id: class_id });
        } else {
            response.status(200).send(result);
        }
    } catch (err) {
        response.status(400).send({ message: 'Failed to get class by id', ...err });
    }
}

const add = async (request, response) => {
    try {
        const data = {
            name: request.body.name,
            teacher: request.body.teacher,
            students: request.body.students,
            end_date: request.body.end_date
        };

        const result = await Class.add(data);

        response.status(200).send(result);
    } catch (err) {
        response.status(400).send({ message: 'Failed to add class', ...err });
    }
}

const update = async (request, response) => {
    try {
        const data = {
            id: request.body.id,
            name: request.body.name,
            teacher: request.body.teacher,
            students: request.body.students,
            end_date: request.body.end_date
        };

        const result = await Class.update(data);

        response.status(200).send(result);
    } catch (err) {
        response.status(400).send({ message: 'Failed to update class', ...err });
    }
}

const remove = async (request, response) => {
    try {
        const id = request.body.id;

        const result = Class.remove(id);

        response.status(200).send({ message: `Remove class id = ${id} successfully`, ...result });
    } catch (err) {
        response.status(400).send({ message: 'Failed to remove class', ...err });
    }
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    remove
}
