// Planty date helpers.
function daysUntilNextWater(lastWatered, everyDays) {
  const elapsed = Math.floor((Date.now() - lastWatered) / 86400000);
  return Math.max(0, everyDays - elapsed);
}
function formatDue(days) {
  if (days === 0) return "water today!";
  if (days === 1) return "water tomorrow";
  return "water in " + days + " days";
}
