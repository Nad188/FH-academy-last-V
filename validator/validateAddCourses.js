const Validator = require("validator");
const isEmpty = require("./isEmpty");

validateAddCourses = (data) => {
  let errors = {};
  data.title = isEmpty(data.title) ? "" : data.title;
  data.discription = isEmpty(data.discription) ? "" : data.discription;

  if (Validator.isEmpty(data.title)) {
    errors.title = "this field is required";
  }
  if (Validator.isEmpty(data.discription)) {
    errors.discription = "this field is required";
  }
  //  Subject populat
  return { errors, isValid: isEmpty(errors) };
};

module.exports = validateAddCourses;
