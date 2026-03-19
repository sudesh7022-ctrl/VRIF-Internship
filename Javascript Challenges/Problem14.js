/*
Write a function to sort a string according to the ginortS order.
*/

function ginortSSort(str) {
  // Validate input
  if (typeof str !== "string") {
    return "Invalid input";
  }

  let lower = [];
  let upper = [];
  let odd = [];
  let even = [];

  // Categorize characters
  for (let ch of str) {
    if (/[a-z]/.test(ch)) {
      lower.push(ch);
    } else if (/[A-Z]/.test(ch)) {
      upper.push(ch);
    } else if (/[13579]/.test(ch)) {
      odd.push(ch);
    } else if (/[02468]/.test(ch)) {
      even.push(ch);
    }
  }

  // Sort each category
  lower.sort();
  upper.sort();
  odd.sort();
  even.sort();

  // Combine in required order
  return lower.join("") + upper.join("") + odd.join("") + even.join("");
}