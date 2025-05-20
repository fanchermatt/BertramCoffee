const getPayerMiddleware = (req, res, next) => {
  next();
};
const advanceDayMiddleware = (req, res, next) => {
  next();
};

module.exports = {
  getPayerMiddleware,
  advanceDayMiddleware,
};
