const express = require("express");
// const upload=require('../toolsToUse/multer')
const {
  teacherLogin,
  getDevisions,
  getClasses,
  getSubjects,
  getCourses,
  UpdateProfil,
} = require("../controllers/teacherController");
const router = express.Router();
 

router.post("/teacherLogin", teacherLogin);
// router.post('/UpdateProfil',upload.single("profilPic"),UpdateProfil)
router.post("/teachergetDevisions", getDevisions);//passport.authenticate('jwt', { session: false }),
router.post("/teachergetClasses", getClasses);//passport.authenticate('jwt', { session: false }),
router.post("/teachergetSubjects", getSubjects);//passport.authenticate('jwt', { session: false }),
router.post("/teachergetCourses", getCourses);//passport.authenticate('jwt', { session: false }),

module.exports = router;
