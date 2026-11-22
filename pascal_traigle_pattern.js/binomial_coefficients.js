const m = require("./math");

function getBinomialCoeffValues(noOfRows) {
  const values = [];

  for (let i = 0; i <= noOfRows; i++) {
    const valueInRow = [];

    for (let j = 0; j <= i; j++) {
      //   const value = m.nCr(i, j);
      const value = (j & i) === j ? 1 : 0;

      valueInRow.push(value);
    }

    values.push(valueInRow);
  }

  return values;
}

module.exports = {
  getBinomialCoeffValues,
};
