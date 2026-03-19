/*
Write a function to check if a number is a Disarium number.
*/

function checkDisarium(num) {
  // Validate input
  if (typeof num !== "number" || num < 0) {
    return "Invalid input";
  }

  const digits = num.toString().split("");
  let sum = 0;

  // Calculate sum of digits powered by their positions
  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(Number(digits[i]), i + 1);
  }

  return sum === num ? "Disarium" : "Not Disarium";
}