/*
Write a function to calculate the cube of a number.
*/

function cubeNumber(num) {
  // Validate input
  if (typeof num !== "number") {
    return "Invalid input";
  }

  // Return cube
  return num * num * num;
}