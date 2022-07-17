/** @format */

const Student = require("../../models/students.models");
const Class = require("../../models/class.models");

const bcrypt = require("bcrypt");
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

    if (request.cookies.user.type === "admin") {
      const result = await Student.getAllClass(subject_id);

      response.status(200).send(result);
    } else {
      const result = await Student.getAllClass(
        request.cookies.user.id
      );

      response.status(200).send(result);
    }
  } catch (err) {
    response
      .status(400)
      .send({
        message: "Failed to get classes by id",
        ...err,
      });
  }
};

const getAllClassAvailable = async (request, response) => {
  try {
    const subject_id = request.params.id;

    const result = await Student.getAllClassAvailable(subject_id);

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

const Mark = async (request, response) => {
  try {
    const data = {
      student_id: request.body.student_id,
      class_id: request.body.class_id,
      subject_id: request.body.subject_id,
      result : request.body.result,
      converttocharacter :request.body.converttocharacter,
    };
    const result = await Student.Mark(data);  
    response.status(200).send(result);
  } catch (err) {
    response
      .status(400)
      .send({ message: "Failed to get update mark", ...err });
  }
};

const CourseRegister = async (request, response) => {
  try {
    if (request.body.subject_id) {
      if (request.body.class_id) {
        const data = {
          student_id: request.body.student_id,
          class_id: request.body.class_id,
          subject_id: request.body.subject_id,
        };

        const message =
          "Successfully registered for the class";
        const result = await Student.classRegister(data);
        const query = `UPDATE classes SET students = students + 1 WHERE id = ${data.class_id}`;

        await Class.query(query);

        response.status(200).send(message);
      } else {
        data = {
          student_id: request.body.student_id,
          subject_id: request.body.subject_id,
        };

        message = "Successfully registered for the subject";
        const result = await Student.subjectRegister(data);
        response.status(200).send(message);
      }
    } else {
      message = "Failed to register for subject or class";
      response.status(200).send(message);
    }
  } catch (err) {
    response
      .status(400)
      .send({
        message: "Failed to registered course",
        ...err,
      });
  }
};

const cancelCourseRegister = async (request, response) => {
  try {
    if (request.body.subject_id) {
      if (request.body.class_id) {
        const data = {
          student_id: request.body.student_id,
          class_id: request.body.class_id,
          subject_id: request.body.subject_id,
        };

        const message =
          "Successfully canceled register for the class";
        const result = await Student.cancelClassRegister(
          data
        );
        response.status(200).send(message);
      } else {
        data = {
          student_id: request.body.student_id,
          subject_id: request.body.subject_id,
        };
        message =
          "Successfully canceled register for the subject";
        const result = await Student.cancelSubjectRegister(
          data
        );
        response.status(200).send(message);
      }
    } else {
      message =
        "Failed to cancel register for subject or class";
      response.status(200).send(message);
    }
  } catch (err) {
    console.log(err);
    response
      .status(400)
      .send({
        message: "Failed to cancel registered course",
        ...err,
      });
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
    data.password = await bcrypt.hash(data.password, salt);
    const result = await Student.add(data);

    response.status(200).send(result);
  } catch (err) {
    response
      .status(400)
      .send({ message: "Failed to add student", ...err });
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

    const updatePassword = Boolean(
      request.body.password.length !== 0
    );

    data.password = await bcrypt.hash(data.password, salt);
    const result = await Student.update(
      data,
      updatePassword
    );

    response
      .status(200)
      .send({ ...result, updatePassword });
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

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove,
  getAllClass,
  getAllClassAvailable,
  CourseRegister,
  cancelCourseRegister,
  Mark,
};
