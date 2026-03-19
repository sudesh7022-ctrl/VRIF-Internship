/*
Write a function to move all zeros in an array to the end
while maintaining the order of non-zero elements.
*/

function moveZeros(arr) {
  // Validate input
  if (!Array.isArray(arr)) {
    return "Invalid input";
  }

  const nonZeros = [];
  const zeros = [];

  // Separate non-zero and zero elements
  for (let num of arr) {
    if (num === 0) {
      zeros.push(num);
    } else {
      nonZeros.push(num);
    }
  }

  // Combine results
  return nonZeros.concat(zeros);
}