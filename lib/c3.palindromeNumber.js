/**
 * @param {number} x
 * @return {boolean}
 */
const solution = function(x) {
  if (x < 0) return false;
  if (x === 0) return true;

  const stringified = x.toString();
  if (stringified.length === 1) return true;

  let first = 0;

  while (first < (stringified.length - 1 - first)) {
    if (stringified[first] === stringified[stringified.length - 1 - first]) {
        first++;
    } else {
        return false;
    }
  }

  return true;
};

export default solution;
