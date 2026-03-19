/*
Write a function to check if the user is eligible to vote.
*/

function checkVotingEligibility(age) {
  // Validate input
  if (typeof age !== "number" || age < 0) {
    return "Invalid input";
  }

  // Check eligibility
  return age >= 18 ? "Eligible" : "Not Eligible";
}