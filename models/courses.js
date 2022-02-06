const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
  title: { type: String },
  subject: { type: String },
  discription: { type: String },
  grade:{type:String},
  file:{type:String}

});

const Courses = mongoose.model("course", coursesSchema);
module.exports = Courses;
