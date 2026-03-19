/*
Write a function to replace all occurrences of ":)" with ":(" in a string.
*/

function replaceSmiley(input) {
  // Validate input
  if (typeof input !== "string") {
    return "Invalid input";
  }

  // Replace all ":)" with ":("
  return input.split(":)").join(":(");
}