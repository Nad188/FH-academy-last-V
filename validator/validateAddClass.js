const Validator = require("validator");
const isEmpty = require("./isEmpty");

validateAddClass = (data) => {
  let errors = {};
  data.name = isEmpty(data.name) ? "" : data.name;
  

  if (Validator.isEmpty(data.name)) {
    errors.name = "this field is required";
  }
  
  //  Subject populat
  return { errors, isValid: isEmpty(errors) };
};

module.exports = validateAddClass;
