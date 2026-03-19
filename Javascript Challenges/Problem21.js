/*
Write a function to check if a number is divisible by five.
*/

function isDivisibleByFive(num) {
  // Validate input
  if (typeof num !== "number") {
    return "Invalid input";
  }

  // Check divisibility
  return num % 5 === 0 ? "Yes" : "No";
}