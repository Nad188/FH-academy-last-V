const Validator = require("validator");
const isEmpty = require("./isEmpty");

validateAddTeacher = (data) => {
  let errors = {};
  data.firstName = isEmpty(data.firstName) ? "" : data.firstName;
  data.lastName = isEmpty(data.lastName) ? "" : data.lastName;
  data.profilPic = isEmpty(data.profilPic) ? "" : data.profilPic;
  data.address = isEmpty(data.address) ? "" : data.adress;
  data.phone = isEmpty(data.phone) ? "" : data.phone;
  data.gander = isEmpty(data.gander) ? "" : data.gander;
  data.subjects = isEmpty(data.subjects) ? "" : data.subjects;
  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.password) ? "" : data.password;

  if (
    Validator.isEmpty(data.firstName) &&
    !Validator.isLength(data.firstName, { min: 2, max: 15 })
  ) {
    errors.firstName = "Name must be between 2 and 15 characters";
  }

  if (
    Validator.isEmpty(data.lastName) &&
    !Validator.isLength(data.lastName, { min: 2, max: 15 })
  ) {
    errors.lastName = "Name must be between 2 and 15 characters";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (!Validator.isEmpty(data.email) && !Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (
    !Validator.isEmpty(data.password) &&
    !Validator.isLength(data.password, { min: 6 })
  ) {
    errors.password = "Password must be at least 6 chracters";
  }
  return { errors, isValid: isEmpty(errors) };
};

module.exports = validateAddTeacher;
