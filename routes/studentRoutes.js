const express = require("express");
const {
  studentRegistration,
  studentLogin,
  getDevisions,
  getClasses,
  getSubjects,
  getCourses,
} = require("../controllers/studentController");
const router = express.Router();

router.post("/studentRegistration", studentRegistration);
router.post("/studentLogin", studentLogin);
router.post("/studentgetDevisions", getDevisions); //passport.authenticate('jwt', { session: false }),
router.post("/studentgetClasses", getClasses); //passport.authenticate('jwt', { session: false }),
router.post("/studentgetSubjects", getSubjects); //passport.authenticate('jwt', { session: false }),
router.post("/studentgetCourses", getCourses); //passport.authenticate('jwt', { session: false }),

module.exports = router;
