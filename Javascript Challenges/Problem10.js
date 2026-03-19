/*
Write a function to check if a number is pronic.
*/

function checkPronic(num) {
  // Validate input
  if (typeof num !== "number" || num < 0) {
    return "Invalid input";
  }

  // Check for pronic number
  for (let i = 0; i * (i + 1) <= num; i++) {
    if (i * (i + 1) === num) {
      return "Pronic";
    }
  }

  return "Not Pronic";
}