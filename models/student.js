const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profilPic:{type:String},
  age: { type: Number },
  gander: { type: String },
  // subjects: [{ type: Schema.Types.ObjectId, ref: "subject" }],
  address: { type: String },
  phone: { type: Number },
  parentName: { type: String },
  parentPhone: { type: Number },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Student = mongoose.model("student", studentSchema);
module.exports = Student;
