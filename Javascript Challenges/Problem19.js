/*
Write a function to check if a number is greater than five.
*/

function isGreaterThanFive(num) {
  // Validate input
  if (typeof num !== "number") {
    return "Invalid input";
  }

  // Check condition
  return num > 5 ? "Yes" : "No";
}