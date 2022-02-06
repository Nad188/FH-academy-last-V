const Validator = require("validator");
const isEmpty = require("./isEmpty");

validateAddSubject = (data) => {
  let errors = {};
  data.name = isEmpty(data.name) ? "" : data.name;
  // class populat

  if (Validator.isEmpty(data.name)) {
    errors.name = "this field is required";
  }

  return { errors, isValid: isEmpty(errors) };
};

module.exports = validateAddSubject;
