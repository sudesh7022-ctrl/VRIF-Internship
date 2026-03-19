/*
Write a function to check if a number is negative.
*/

function checkNegative(num) {
  // Validate input
  if (typeof num !== "number") {
    return "Invalid input";
  }

  // Check if negative
  return num < 0 ? "Negative" : "Not Negative";
}