const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema({
  name: { type: String },
  devision : {type:Schema.Types.ObjectId,ref:'devision'}
});

const Class = mongoose.model("class", classSchema);
module.exports = Class;
