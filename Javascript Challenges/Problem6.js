/*
Write a function to add the first and last elements of an array.
*/

function addListEnds(arr) {
  // Validate input
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Invalid input";
  }

  // Add first and last elements
  return arr[0] + arr[arr.length - 1];
}