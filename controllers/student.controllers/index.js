/** @format */

const Student = require("../../models/students.models");
const bcrypt = require("bcrypt");

const characterConvert = grade => {
  if (grade >= 3.5) {
    return 'A';
  }

  if (grade >= 3) {
    return 'B';
  }

  if (grade >= 2) {
    return 'C';
  }

  if (grade >= 1.5) {
    return 'D';
  }

  return 'F';
}

const getAll = async (request, response) => {
  try {
    const filter = request.params.type
      ? {
          type: request.params.type,
          order: request.params.order,
        }
      : undefined;

    const result = await Student.getAll(filter);

    response.status(200).send(result);
  } catch (err) {
    console.log(err);
    response.status(400).send({
      message: "Failed to get all students",
      ...err,
    });
  }
};

const getById = async (request, response) => {
  try {
    const student_id = request.params.id;

    const result = await Student.getById(student_id);

    if (result.length === 0) {
      response.status(400).send({
        message: "Student does not exist",
        id: student_id,
      });
    } else {
      response.status(200).send(result);
    }
  } catch (err) {
    response.status(400).send({
      message: "Failed to get student by id",
      ...err,
    });
  }
};

const getAllClass = async (request, response) => {
  try {
    const subject_id = request.params.id;

    const result = await Student.getAllClass(subject_id);

    if (result.length === 0) {
      response
        .status(400)
        .send({ message: "Student does not have classes", id: subject_id });
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
    const salt = await bcrypt.genSalt(10);
    const data = {
      email: request.body.email,
      password: request.body.password,
      name: request.body.name,
      gender: request.body.gender,
      student_id: request.body.student_id,
      cpa: request.body.cpa,
      scholarship: request.body.scholarship,
      date: request.body.date,
    };
    console.log(data);
    data.password = await bcrypt.hash(data.password, salt);
    const result = await Student.add(data);

    response.status(200).send(result);
  } catch (err) {
    response.status(400).send({ message: "Failed to add student", ...err });
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
      gender: request.body.gender,
      student_id: request.body.student_id,
      cpa: request.body.cpa,
      scholarship: request.body.scholarship,
      date: request.body.date,
    };

    const updatePassword = Boolean(request.body.password.length !== 0); 

    data.password = await bcrypt.hash(data.password, salt);
    const result = await Student.update(data, updatePassword);

    response.status(200).send({...result, updatePassword});
  } catch (err) {
    response.status(400).send({
      message: "Failed to update student",
      ...err,
    });
  }
};

const remove = async (request, response) => {
  try {
    const id = request.body.id;

    const result = Student.remove(id);

    response.status(200).send({
      message: `Remove student id = ${id} successfully`,
      ...result,
    });
  } catch (err) {
    response.status(400).send({
      message: "Failed to remove student",
      ...err,
    });
  }
};

const evaluation = async (request, response) => {
  try {
    const { id, class_id, subject_id, grade } = request.body;

    const characterGrade = characterConvert(grade);

    const query = `UPDATE Student SET result = ${grade}, converttocharacter = '${characterGrade}' WHERE student_id = ${id} AND subject_id = ${subject_id} AND class_id = ${class_id}`;

    const result = await Student.query(query);

    response.status(200).send({ message: 'Update education result successfully', ...result });
  } catch (err) {
    response.status(400).send({
      message: 'Failed to update education result',
      ...err
    });
  }
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove,
  getAllClass,
  evaluation
};
