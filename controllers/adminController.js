const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const gravatar = require("gravatar");

// Modals
const Admin = require("../models/admin");
const Teacher = require("../models/teacher");
const Student = require("../models/student");
const Devision = require("../models/devision");
const Class = require("../models/class");
const Subject = require("../models/subject");
const Courses = require("../models/courses");

// Validator
const validateRegisterInput = require("../validator/validateRegisterInput");
const validatorLogInInput = require("../validator/validatorLogInInput");
const validateAddTeacher = require("../validator/validateAddTeacher");
const validateAddDivision = require("../validator/validateaddDivision");
const validateAddClass = require("../validator/validateAddClass");
const validateAddSubject = require("../validator/validateAddSubject");
const validateAddCourses = require("../validator/validateAddCourses");

module.exports = {
  adminRegistration: async (req, res) => {
    try {
      const { errors, isValid } = validateRegisterInput(req.body);
      if (!isValid) {
        return res.status(402).json({ errors });
      }
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email });
      if (admin) {
        errors.email = "Admin already exist";
        return res.status(402).json(errors);
      }
      let hashedPassword;
      hashedPassword = await bcrypt.hash(password, 10);

      const newAdmin = new Admin({ ...req.body, password: hashedPassword });

      newAdmin.save();
      res
        .status(202)
        .json({ msg: "Your registration has been successfully completed" });
    } catch (error) {
      res.status(402).json({ msg: "Ops,registration failed" });
      console.log(error);
    }
  },
  adminLogIn: async (req, res) => {
    try {
      const { errors, isValid } = validatorLogInInput(req.body);
      if (!isValid) {
        return res.status(402).json({ errors });
      }
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email });
      if (!admin) {
        errors.email = "Bad credentials ";
        res.status(402).json(errors);
      }
      const isCorrect = await bcrypt.compare(password, admin.password);
      if (!isCorrect) {
        errors.password = "Bad credentials";
        res.status(402).json(errors);
      }
      const payload = {
        id: admin.id,
        firstName: admin.firstName,
        lastName: admin.lastName,
        email: admin.email,
        password: admin.password,
      };
      jwt.sign(payload, keys.secretOrKey, { expiresIn: 7200 }, (err, token) => {
        res.json({
          success: true,
          token: "Bearer" + token,
        });
      });
    } catch (error) {
      res.status(402).json({ msg: "Error in admin login" });
    }
  },


  getTeachers: async (req, res) => {
    try {
      const teachers = await Teacher.find();
      if (teachers.length === 0) {
        return res.status(402).json({ msg: "Could not find teacher" });
      }
      res.status(202).json(teachers);
    } catch (error) {
      res.status(402).json({ msg: "Error in getting teachers" });
    }
  },
  addTeacher: async (req, res) => {
    try {
      const { errors, isValid } = validateAddTeacher(req.body);
      if (!isValid) {
        return res.status(402).json(errors);
      }
      const { email, password } = req.body;
      const teacher = await Teacher.findOne({ email });
      if (teacher) {
        errors.email = "Teacher already exist";
        return res.status(202).json(errors);
      }

      let hashedPassword = await bcrypt.hash(password, 10);
      const newTeacher = new Teacher({
        ...req.body,
        password: hashedPassword,
      });
      newTeacher.save();
      res.status(202).json(teacher);
    } catch (error) {
      res.status(402).json({ mas: "Adding teacher failed" });
      console.log(error);
    }
  },
  getTeacher: async (req, res) => {
    let { _id } = req.params;
    try {
     const teacher = await Teacher.find({ _id });
      res.status(202).json(teacher);
    } catch (error) {
      res.status(402).json({ msg: "Could not find teacher" });
    }
  },

  deleteTeacher: async (req, res) => {
    let { _id } = req.params;
    try {
      await Teacher.findByIdAndDelete({ _id });
      res.status(202).json({ msg: "Teacher has been removed" });
    } catch (error) {
      res.status(401).json({ msg: "Removing teacher failed" });
    }
  },
  updateTeacher: async (req, res) => {
    let { _id } = req.params;
    try {
      await Teacher.findByIdAndUpdate({ _id }, { $set: { ...req.body } });
      res.status(202).json({ msg: "Teacher has been updated" });
    } catch (error) {
      res.status(402).json({ msg: "Updating teacher failed" });
    }
  },
  deleteTeacher: async (req, res) => {
    let { _id } = req.params;
    try {
      await Teacher.findByIdAndDelete({ _id });
      res.status(202).json({ msg: "Teacher has been removed" });
    } catch (error) {
      res.status(401).json({ msg: "Removing teacher failed" });
    }
  },
  getStudents: async (req, res) => {
    try {
      const students = await Student.find();
      if (students.length === 0) {
        return res.status(402).json({ msg: "Could not find student" });
      }
      res.status(202).json(students);
    } catch (error) {
      res.status(402).json({ msg: "Error in getting students" });
    }
  },
  deleteStudent: async (req, res) => {
    let { _id } = req.params;
    try {
      await Student.findByIdAndDelete({ _id });
      res.status(202).json({ msg: "Student has been removed" });
    } catch (error) {
      res.status(401).json({ msg: "Removing student failed" });
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
    }
  },
  addDevision: async (req, res) => {
    try {
      const { errors, isValid } = validateAddDivision(req.body);
      if (!isValid) {
        return res.status(402).json(errors);
      }
      const { name } = req.body;
      const devision = await Devision.findOne({ name });
      if (devision) {
        errors.name = "Devision already exist";
        return res.status(402).json(errors);
      }
      const newDevision = new Devision({ ...req.body });
      newDevision.save();
      res.status(202).json({ msg: "Devision has been added seccessfully" });
    } catch (error) {
      res.status(402).json({ msg: "Adding devision failed" });
    }
  },
  updateDevision: async (req, res) => {
    let { _id } = req.params;
    try {
      await Devision.findByIdAndUpdate({ _id }, { $set: { ...req.body } });
      res.status(202).json({ msg: "Devision has been updated" });
    } catch (error) {
      res.status(402).json({ msg: "Updating devision failed" });
    }
  },
  deleteDevision: async (req, res) => {
    let { _id } = req.params;
    try {
      await Devision.findByIdAndDelete({ _id });
      res.status(202).json({ msg: "Devision has been removed" });
    } catch (error) {
      res.status(402).json({ msg: "Removing devision failed" });
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
  addClass: async (req, res) => {
    try {
      const { errors, isValid } = validateAddClass(req.body);
      if (!isValid) {
        return res.status(402).json(errors);
      }
      const { name } = req.body;
      const classe = await Class.findOne({ name });
      if (classe) {
        return res.status(402).json({ msg: "Class already exist" });
      }
      const newClass = new Class({ ...req.body });
      newClass.save();
      res.status(202).json({ msg: "Class has been added seccessfully" });
    } catch (error) {
      res.status(402).json({ msg: "Adding class failed" });
    }
  },
  updateClass: async (req, res) => {
    let { _id } = req.params;
    try {
      await Class.findByIdAndUpdate({ _id }, { $set: { ...req.body } });
      res.status(202).json({ msg: "Class has been updated" });
    } catch (error) {
      res.status(202).json({ msg: "Udpating class failed" });
    }
  },
  deleteClass: async (req, res) => {
    let { _id } = req.params;
    try {
      await Class.findByIdAndDelete({ _id });
      res.status(202).json({ msg: "Class has been removed" });
    } catch (error) {
      res.status(402).json({ msg: "Removing class failed" });
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
  addSubject: async (req, res) => {
    try {
      const { errors, isValid } = validateAddSubject(req.body);
      if (!isValid) {
        return res.status(402).json(errors);
      }
      const { name } = req.body;
      const subject = await Subject.findOne({ name });
      if (subject) {
        return res.status(402).json({ msg: "subject already exist" });
      }
      const newSubject = new Subject({ ...req.body });
      newSubject.save();
      res.status(202).json({ msg: "Subject has been added seccessfully" });
    } catch (error) {
      res.status(402).json({ msg: "Adding Subject failed" });
    }
  },
  updateSubject: async (req, res) => {
    let { _id } = req.params;
    try {
      await Subject.findByIdAndUpdate({ _id }, { $set: { ...req.body } });
      res.status(202).json({ msg: "Subject has been Updated" });
    } catch (error) {
      res.status(402).json({ msg: "Updating subject failed" });
    }
  },
  deleteSubject: async (req, res) => {
    let { _id } = req.params;
    try {
      await Subject.findByIdAndRemove({ _id });
      res.status(202).json({ msg: "Subject has been removed" });
    } catch (error) {
      res.status(402).json({ msg: "Removing subject failed" });
    }
  },
  getCourses: async (req, res) => {
    try {
      const courses = await Courses.find();
      if (courses.length === 0) {
        res.status(402).json({ msg: "Could not find courses" });
      }
      res.status(202).json( courses );
    } catch (error) {
      res.status(402).json({ msg: "Error in getting course" });
    }
  },

  getCourse: async (req, res) => {
    let { _id } = req.params;
    try {
     const course = await Courses.find({ _id });
      res.status(202).json(course);
    } catch (error) {
      res.status(402).json({ msg: "Could not find course" });
    }
  },
  
  addCourses: async (req, res) => {
    try {
      const { errors, isValid } = validateAddCourses(req.body);
      if (!isValid) {
        return res.status(402).json(errors);
      }
      const { title } = req.body;
      const courses = await Courses.findOne({ title });
      if (courses) {
        return res.status(402).json({ msg: "Course already exist" });
      }

      const newCourse = new Courses({ ...req.body });
      newCourse.save();
      res.status(202).json({ msg: "Course has been added seccessfully" });
    } catch (error) {
      res.status(402).json({ msg: "Adding Course failed" });
      console.log(error);
    }
  },
  updateCourses: async (req, res) => {
    let { _id } = req.params;
    try {
      await Courses.findByIdAndUpdate({ _id }, { $set: { ...req.body } });
      res.status(202).json({ msg: "Course has been updated" });
    } catch (error) {
      res.status(402).json({ msg: "Updating course failed" });
    }
  },
  deleteCourses: async (req, res) => {
    let { _id } = req.params;
    try {
      await Courses.findByIdAndDelete({ _id });
      res.status(202).json({ msg: "Course has been removed" });
    } catch (error) {
      res.status(402).json({ msg: "Removing course failed" });
    }
  },
};
