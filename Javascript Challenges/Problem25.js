/*
Write a function to convert minutes into seconds.
*/

function convertToSeconds(minutes) {
  // Validate input
  if (typeof minutes !== "number") {
    return "Invalid input";
  }

  // Convert minutes to seconds
  return minutes * 60;
}