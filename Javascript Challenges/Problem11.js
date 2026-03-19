/*
Write a function to find the maximum number of words that can be typed
without using a broken keyboard letter.
*/

function maxWordsCanType(str, brokenLetter) {
  // Validate input
  if (typeof str !== "string" || typeof brokenLetter !== "string") {
    return "Invalid input";
  }

  // Convert to lowercase for case-insensitive comparison
  const letter = brokenLetter.toLowerCase();

  // Split sentence into words
  const words = str.toLowerCase().split(" ");

  let count = 0;

  // Check each word
  for (let word of words) {
    if (!word.includes(letter)) {
      count++;
    }
  }

  return count;
}