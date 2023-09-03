function pow(a, x) {
  let res = 1;
  if (x < 0) {
    x = -x;
    for (let i = 1; i <= x; i++) {
      res /= a;
    }
  } else if (x > 0) {
    for (let i = 1; i <= x; i++) {
      res = res * a;
    }
  } else {
    res = 1;
  }
  return res;
}

module.exports = pow;
