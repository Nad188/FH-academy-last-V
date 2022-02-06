const express = require("express");
// const passport=require('passport')
const isAuth=require('../config/passport')
const {
  adminRegistration,
  adminLogIn,
  addTeacher,
  deleteTeacher,
  updateTeacher,
  addDevision,
  updateDevision,
  deleteDevision,
  addClass,
  updateClass,
  deleteClass,
  addSubject,
  updateSubject,
  deleteSubject,
  addCourses,
  updateCourses,
  deleteCourses,
  getTeachers,
  getDevisions,
  getClasses,
  getSubjects,
  getCourses,
  getStudents,
  getTeacher,
  deleteStudent,
  getCourse,
} = require("../controllers/adminController");
const router = express.Router();


router.post("/adminRegistration", adminRegistration);
router.post("/adminLogIn", adminLogIn);
router.get("/adminPage", isAuth(), (req, res) => res.send(req.admin))
router.post("/getTeachers",getTeachers)  
router.post("/addteacher",addTeacher)
router.post('/getTeacher/:_id',getTeacher)
router.put('/updateTeacher/:_id',updateTeacher)
router.delete('/deleteTeacher/:_id',deleteTeacher)
router.post('/getStudents',getStudents)
router.delete('/deleteStudent/:_id',deleteStudent)
router.post('/getDevisions',getDevisions)  
router.post('/addDevision',addDevision)
router.put('/updateDevision/:_id',updateDevision)
router.delete('/deleteDevision/:_id',deleteDevision)
router.post('/getClasses',getClasses)
router.post('/addClass',addClass)
router.put('/updateClass/:_id',updateClass)
router.delete('/deleteClass/:_id',deleteClass)
router.post('/getSubjects',getSubjects)
router.post('/addSubject',addSubject)
router.put('/updateSubject/:_id',updateSubject)
router.delete('/deleteSubject/:_id',deleteSubject)
router.post('/getCourses',getCourses)
router.post('/getCourse/:_id',getCourse)
router.post('/addCourses',addCourses)
router.put('/updateCourses/:_id',updateCourses)
router.delete('/deleteCourses/:_id',deleteCourses)




module.exports = router;
