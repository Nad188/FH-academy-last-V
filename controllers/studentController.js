const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Modals
const Student = require("../models/student");
const Devision = require("../models/devision");
const Class = require("../models/class");
const Subject = require("../models/subject");
const Courses = require("../models/courses");

// Validators
const validateStudentRegistrationInput = require("../validator/validateStudentRegistrationInput");
const validatorLogInInput = require("../validator/validatorLogInInput");

module.exports = {
  studentRegistration: async (req, res) => {
    try {
      const { errors, isValid } = validateStudentRegistrationInput(req.body);
      if (!isValid) {
        return res.status(402).json(errors);
      }
      const { email, password } = req.body;
      const student = await Student.findOne({ email });
      if (student) {
        errors.email = "Student already exist";
        return res.status(402).json(errors);
      }
      let hashedPassword = await bcrypt.hash(password, 10);
      const newStudent = new Student({ ...req.body, password: hashedPassword });
      newStudent.save();
      res.status(202).json({ msg: "Student has been added seccessfully" });
    } catch (error) {
      res.status(404).json({ msg: "Adding student failed" });
      console.log(error);
    }
  },
  studentLogin: async (req, res) => {
    try {
      const { errors, isValid } = validatorLogInInput(req.body);
      if (!isValid) {
        return res.status(402).json(errors);
      }
      const { email, password } = req.body;
      const student = await Student.findOne({ email });
      if (!student) {
        errors.email = "Bad credentials";
        res.status(402).json(errors);
      }
      const isCorrect = await bcrypt.compare(password, student.password);

      if (!isCorrect) {
        errors.password = "Bad credentials";
        res.status(402).json(errors);
      }
      const payload = {
        id: student.id,
        firstName: student.firstName,
        lastName: student.lastName,
        profilPic:student.avatar,
        age: student.age,
        gander: student.gander,
        grade: student.grade,
        address: student.address,
        phone: student.phone,
        parentName: student.parentName,
        parentPhone: student.parentPhone,
        email: student.email,
        password: student.password,
      };

      jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
        res.json({
          success: true,
          token: "Bearer" + token,
        });
      });
    } catch (error) {
      res.status(402).json({ msg: "Error in student login" });
      console.log(error);
    }
  },
  getDevisions: async (req, res) => {
    try {
      const { name } = req.body;
      const devisions = await Devision.find({ name });
      if (devisions.length === 0) {
        res.status(402).json({ msg: "Could not find division" });
      }
      res.status(202).json({ result: devisions });
    } catch (error) {
      res.status(402).json({ msg: "Error in getting devision" });
      console.log(error);
    }
  },
  getClasses: async (req, res) => {
    try {
      const { name } = req.body;
      const classes = await Class.find({ name });
      if (classes.length === 0) {
        res.status(402).json({ msg: "Could not find class" });
      }
      res.status(202).json({ result: classes });
    } catch (error) {
      res.status(402).json({ msg: "Error in getting class" });
    }
  },
  getSubjects: async (req, res) => {
    try {
      const { name } = req.body;
      const subjects = await Subject.find({ name });
      if (subjects.length === 0) {
        res.status(402).json({ msg: "Could not find subject" });
      }
      res.status(202).json({ result: subjects });
    } catch (error) {
      res.status(402).json({ msg: "Error in getting subject" });
    }
  },
  getCourses: async (req, res) => {
    try {
      const { name } = req.body;
      const courses = await Courses.find({ name });
      if (courses.length === 0) {
        res.status(402).json({ msg: "Could not find courses" });
      }
      res.status(202).json({ result: courses });
    } catch (error) {
      res.status(402).json({ msg: "Error in getting course" });
    }
  },
};
