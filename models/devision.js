const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const devisionSchema = new Schema({
  name: { type: String },
});

const Devision = mongoose.model("devision", devisionSchema);
module.exports = Devision;
