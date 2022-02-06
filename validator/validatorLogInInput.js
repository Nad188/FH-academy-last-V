const Validator = require("validator");
const isEmpty = require("./isEmpty");

validatorLogInInput = (data) => {
  let errors = {};
  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.password) ? "" : data.password;

  if (Validator.isEmpty(data.email)) {
    errors.email = "this field is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "this is not a valid email";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "this field is required";
  }
  if (
    !Validator.isEmpty(data.password) &&
    !Validator.isLength(data.password, { min: 6 })
  ) {
    errors.password = "Password must be at least 6 chracters";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validatorLogInInput;
