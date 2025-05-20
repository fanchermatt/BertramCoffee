const trimToTwoDecimalPlaces = (value) => {
  if (typeof value === "number") {
    return parseFloat(value.toFixed(2));
  }
  return value;
};

module.exports = {
  trimToTwoDecimalPlaces,
};
