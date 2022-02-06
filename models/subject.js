const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  name: { type: String },
  class: { type: Schema.Types.ObjectId, ref: "class" },
});

const Subject = mongoose.model("subject", subjectSchema);
module.exports = Subject;
