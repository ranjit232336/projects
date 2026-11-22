function sin(angle) {
  return Math.sin((Math.PI * angle) / 180);
}

function cos(angle) {
  return Math.cos((Math.PI * angle) / 180);
}

function calFactorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
}

function nCr(n, r) {
  return calFactorial(n) / (calFactorial(r) * calFactorial(n - r));
}

module.exports = {
  sin,
  cos,
  nCr,
};
