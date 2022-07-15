const Subject = require("../../models/subject.models");

const getAll = async (request, response) => {
  try {
    const filter = request.params.type
      ? { type: request.params.type, order: request.params.order }
      : undefined;

    const result = await Subject.getAll(filter);

    response.status(200).send(result);
  } catch (err) {
    response
      .status(400)
      .send({ message: "Failed to get all subjects", ...err });
  }
};

const getById = async (request, response) => {
  try {
    const subject_id = request.params.id;

    const result = await Subject.getById(subject_id);

    if (result.length === 0) {
      response
        .status(400)
        .send({ message: "Subject does not exist", id: subject_id });
    } else {
      response.status(200).send(result);
    }
  } catch (err) {
    response
      .status(400)
      .send({ message: "Failed to get subject by id", ...err });
  }
};

const getAllClass = async (request, response) => {
  try {
    const subject_id = request.params.id;

    const result = await Subject.getAllClass(subject_id);

    if (result.length === 0) {
      response
        .status(400)
        .send({ message: "Subject does not have classes", id: subject_id });
    } else {
      response.status(200).send(result);
    }
  } catch (err) {
    response
      .status(400)
      .send({ message: "Failed to get classes by id", ...err });
  }
};

const add = async (request, response) => {
  try {
    const data = {
      name: request.body.name,
      faculty: request.body.faculty,
      classes: request.body.classes,
      credit: request.body.credit,
    };

    const result = await Subject.add(data);

    response.status(200).send(result);
  } catch (err) {
    response.status(400).send({ message: "Failed to add student", ...err });
  }
};

const update = async (request, response) => {
  try {
    const data = {
      id: request.body.id,
      name: request.body.name,
      faculty: request.body.faculty,
      classes: request.body.classes,
      credit: request.body.credit,
    };

    const result = await Subject.update(data);

    response.status(200).send(result);
  } catch (err) {
    console.log(err);
    response.status(400).send({ message: "Failed to update subject", ...err });
  }
};

const remove = async (request, response) => {
  try {
    const id = request.body.id;

    const result = Subject.remove(id);

    response
      .status(200)
      .send({ message: `Remove subject id = ${id} successfully`, ...result });
  } catch (err) {
    response.status(400).send({ message: "Failed to remove subject", ...err });
  }
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove,
  getAllClass,
};
