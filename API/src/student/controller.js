const pool = require("../../db");

const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;

  // check if email exists first
  pool.query(queries.checkIfEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exists, please choose another.");
    } else {
      pool.query(
        queries.addStudent,
        [name, email, age, dob],
        (error, results) => {
          if (error) throw error;
          res.status(201).send("Student successfully added to the database.");
          console.log("student created");
        }
      );
    }
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("Student does not exists in the database.");
    } else {
      pool.query(queries.updateStudent, [name, id], (error, results) => {
        if (error) throw error;
        res
          .status(200)
          .send("Student has been successfully updated in the database.");
      });
    }
  });
};

const deleteStudentById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("Student does not exists in the database.");
    } else {
      pool.query(queries.deleteStudentById, [id], (error, results) => {
        if (error) throw error;
        res
          .status(200)
          .send("Student has been successfully removed from the database.");
      });
    }
  });
};

const deleteAllStudents = (req, res) => {
  pool.query(deleteAllStudents, (error, results) => {
    if (error) throw error;
    res
      .send("All students have sucessfully been deleted from the database.");
  });
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudentById,
  deleteAllStudents,
};
