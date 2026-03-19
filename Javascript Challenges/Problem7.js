/*
Write a function to add even numbers from 1 to n (inclusive).
*/

function sumEvenNumbers(n) {
  // Validate input
  if (typeof n !== "number" || n < 1) {
    return "Invalid input";
  }

  let sum = 0;

  // Loop through numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}