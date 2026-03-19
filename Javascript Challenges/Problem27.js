/*
Write a function to find the smallest of two numbers.
*/

function findSmallest(num1, num2) {
  // Validate input
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Invalid input";
  }

  // Return smallest number
  return num1 <= num2 ? num1 : num2;
}