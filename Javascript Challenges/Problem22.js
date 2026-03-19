/*
Write a function to check if a number is odd or even.
*/

function checkOddEven(num) {
  // Validate input
  if (typeof num !== "number") {
    return "Invalid input";
  }

  // Check even or odd
  return num % 2 === 0 ? "Even" : "Odd";
}