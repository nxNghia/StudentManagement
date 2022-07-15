const Admin = require("../../models/admin.models");
const bcrypt = require("bcrypt");
const getAll = async (request, response) => {
  try {
    const filter = request.params.type
      ? { type: request.params.type, order: request.params.order }
      : undefined;

    const result = await Admin.getAll(filter);

    response.status(200).send(result);
  } catch (err) {
    console.log(err);
    response.status(400).send({ message: "Failed to get all admins", ...err });
  }
};

const getById = async (request, response) => {
  try {
    const admin_id = request.params.id;

    const result = await Admin.getById(admin_id);

    if (result.length === 0) {
      response
        .status(400)
        .send({ message: "Admin does not exist", id: admin_id });
    } else {
      response.status(200).send(result);
    }
  } catch (err) {
    response.status(400).send({ message: "Failed to get admin by id", ...err });
  }
};

const add = async (request, response) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const data = {
      email: request.body.email,
      password: request.body.password,
      name: request.body.name,
    };
    data.password = await bcrypt.hash(data.password, salt);
    const result = await Admin.add(data);

    response.status(200).send(result);
  } catch (err) {
    console.log(err);
    response.status(400).send({ message: "Failed to add admin", ...err });
  }
};

const update = async (request, response) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const data = {
      id: request.body.id,
      email: request.body.email,
      password: request.body.password,
      name: request.body.name,
    };
    data.password = await bcrypt.hash(data.password, salt);
    const result = await Admin.update(data);

    response.status(200).send(result);
  } catch (err) {
    data.password = await bcrypt.hash(data.password, salt);
    response.status(400).send({ message: "Failed to update admin", ...err });
  }
};

const remove = async (request, response) => {
  try {
    const id = request.body.id;

    const result = Admin.remove(id);

    response
      .status(200)
      .send({ message: `Remove student id = ${id} successfully`, ...result });
  } catch (err) {
    response.status(400).send({ message: "Failed to remove admin", ...err });
  }
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove,
};
