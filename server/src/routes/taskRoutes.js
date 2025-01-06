const express = require("express");
const router = express.Router();

// Mock tasks
const tasks = [
  { id: 1, name: "Task 1", deadlineDays: 3 },
  { id: 2, name: "Task 2", deadlineDays: 5 },
  { id: 3, name: "Task 3", deadlineDays: 2 },
];

router.get("/", (req, res) => {
  res.json(tasks);
});

module.exports = router;
