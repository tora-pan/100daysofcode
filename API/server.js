const express = require("express");
const studentRoutes = require("./src/student/routes");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("working");
});

app.use("/api/v1/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`The app is listening on port ${PORT}`);
});
