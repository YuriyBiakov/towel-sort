
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix === undefined) return result;

  let length = matrix.length;
  let tempMatrix = matrix;
  for (let i = 0; i < length; i++) {
    if ((i % 2) === 0) {
      for (let k = 0; k < tempMatrix[i].length; k++){
        result.push(tempMatrix[i][k]);
      }
    }
    else {
      tempMatrix[i].sort((a,b) => b-a);
      for (let k = 0; k < tempMatrix[i].length; k++){
        result.push(tempMatrix[i][k]);
      }
    }
    }
  return result;
}
