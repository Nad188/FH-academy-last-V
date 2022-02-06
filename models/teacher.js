const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profilPic:{type:String},
  address: { type: String },
  phone: { type: Number },
  gander: { type: String },
  // subjects: [{ type: Schema.Types.ObjectId, ref: "subject" }],
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Teacher = mongoose.model("teacher", teacherSchema);
module.exports = Teacher;

