const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get("/", controller.getStudents); //req,res get's passed automatically
router.post("/", controller.addStudent);
router.get("/:id", controller.getStudentById);
router.delete("/:id", controller.deleteStudentById);
router.delete("/", controller.deleteAllStudents);
router.put("/:id", controller.updateStudent);

module.exports = router;
