// get all students
const getStudents = "SELECT * FROM students";

// get student by id
const getStudentById = "SELECT * FROM students WHERE id = $1";

// check email
const checkIfEmailExists = "SELECT s FROM students s WHERE s.email = $1";

// add student
const addStudent =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";

// update student
const updateStudent = "UPDATE students SET name = $1 WHERE id = $2";

// delete student
const deleteStudentById = "DELETE FROM students WHERE id = $1";

// delete all students
const deleteAllStudents = "DELETE FROM students";

module.exports = {
  getStudents,
  getStudentById,
  checkIfEmailExists,
  addStudent,
  updateStudent,
  deleteStudentById,
  deleteAllStudents,
};
