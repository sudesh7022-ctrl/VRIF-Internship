/*
Write a function that doubles a given number.
*/

function doubleNumber(num) {
  // Validate input
  if (typeof num !== "number") {
    return "Invalid input";
  }

  // Return doubled value
  return num * 2;
}