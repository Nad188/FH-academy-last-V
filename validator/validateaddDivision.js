const Validator = require("validator");
const isEmpty = require("./isEmpty");

validateAddDivision = (data) => {
  let errors = {};
  data.name = isEmpty(data.name) ? "" : data.name;

  if (Validator.isEmpty(data.name)) {
    errors.name = "this field is required";
  }

  return { errors, isValid: isEmpty(errors) };
};

module.exports = validateAddDivision;
