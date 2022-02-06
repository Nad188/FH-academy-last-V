const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// ToolsToUse
// const bufferConversation = require("../toolsToUse/bufferConversation");
// const cloudinary = require("../toolsToUse/cloudinary");

// Modals
const Teacher = require("../models/teacher");
const Devision = require("../models/devision");
const Class = require("../models/class");
const Subject = require("../models/subject");
const Courses = require("../models/courses");

// Validators
const validatorLogInInput = require("../validator/validatorLogInInput");

module.exports = {
  teacherLogin: async (req, res) => {
    try {
      const { errors, isValid } = validatorLogInInput(req.body);
      if (!isValid) {
        return res.status(402).json(errors);
      }
      const { email, password } = req.body;
      const teacher = await Teacher.findOne({ email });
      if (!teacher) {
        errors.email = "Bad credentials";
        res.status(402).json(errors);
      }
      const isCorrect = await bcrypt.compare(password, teacher.password);
      if (!isCorrect) {
        errors.password = "Bad credentials";
        res.status(402).json(errors);
      }
      const payload = {
        id: teacher.id,
        firstName: teacher.firstName,
        lastName: teacher.lastName,
        profilPic: teacher.profilPic,
        address: teacher.address,
        phone: teacher.phone,
        gander: teacher.phone,
        email: teacher.email,
        password: teacher.password,
      };
      const profilPic = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' })
      jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
        res.json({
          success: true,
          token: "Bearer" + token,
        });
      });
    } catch (error) {
      res.status(402).json({ msg: "Error in admin login" });
      console.log(error);
    }
  },
  // UpdateProfil: async (req, res) => {
  //   try {
  //     const { firstName, lastName, profilPic, address, phone, gander } = req.body;
  //     const userPostImg = await bufferConversation(
  //       req.file.originalname,
  //       req.file.buffer
  //     );
  //     const imgResponse = await cloudinary.uploader.upload(userPostImg);

  //     const teacher = await findOne({ email });
  //     if (firstName) {
  //       teacher.firstName = firstName;
  //       await student.save();
  //     }
  //     if (lastName) {
  //       teacher.lastName = lastName;
  //       await teacher.save();
  //     }
  //     if (address) {
  //       teacher.address = address;
  //       await teacher.save();
  //     }
  //     if (phone) {
  //       teacher.phone = phone;
  //       await teacher.save();
  //     }
  //     if (gander) {
  //       teacher.gander = gander;
  //       await teacher.save();
  //     }

  //     teacher.profilPic = imgResponse.secure_url;
  //     await teacher.save();
  //     res.status(200).json(teacher);
  //   } catch (error) {
  //     res.status(402).json({ msg: "Error in updating profil" });
  //     console.log(error)
  //   }
  // },
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
