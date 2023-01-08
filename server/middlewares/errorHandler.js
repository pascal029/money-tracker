const errorHandler = (err, req, res, next) => {
  let code = 500;
  let message = `Internal Server Error`;

  if (err.name == "SequelizeValidationError") {
    code = 400;
    message = err.errors[0].message;
  } else if (err.name == "credential_required") {
    code = 400;
    message = `Email and password are required`;
  } else if (err.name == "invalid_credential") {
    code = 400;
    message = `Incorrect email or password`;
  }
  res.status(code).json({ message });
};

module.exports = errorHandler;
