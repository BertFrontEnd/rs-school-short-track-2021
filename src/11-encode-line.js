/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 1;
  let arr = [];

  if (str.length === 0) {
    return '';
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      res += count + str[i];
      count = 1;
    }
  }

  arr = Array.from(res).filter((elem) => (elem !== '1' ? elem : null));

  return arr.join('');
}

module.exports = encodeLine;
