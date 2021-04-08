/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const result = [];
  let sumRow = '';

  for (let i = 0; i < matrix.length; i++) {
    sumRow = 0;
    if (i === 0) {
      for (let k = 0; k < matrix[i].length; k++) {
        sumRow += matrix[i][k];
      }
    } else {
      for (let k = 0; k < matrix[i].length; k++) {
        if (matrix[i - 1][k] !== 0) {
          sumRow += matrix[i][k];
        }
      }
    }
    result.push(sumRow);
  }

  return result.reduce((acc, elem) => acc + elem, 0);
}

module.exports = getMatrixElementsSum;
