export const isCurrentlyOpen = (hours) => {
  // Check if it's open 24/7
  if (hours === "Open 24/7") {
    return true;
  }
  
  // Get current date and time
  const now = new Date();
  const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  
  // If hours is not an object, we can't determine
  if (typeof hours !== 'object') {
    return false;
  }
  
  // Get hours for the current day
  const todaysHours = hours[currentDay];
  
  // If closed today
  if (!todaysHours || todaysHours === "Closed") {
    return false;
  }
  
  // Parse hours
  const hoursMatch = todaysHours.match(/(\d+)(?::(\d+))?\s*([ap]m)\s*-\s*(\d+)(?::(\d+))?\s*([ap]m)/i);
  
  if (!hoursMatch) {
    return false;
  }
  
  // Extract start and end hours
  let startHour = parseInt(hoursMatch[1]);
  const startMinute = hoursMatch[2] ? parseInt(hoursMatch[2]) : 0;
  const startPeriod = hoursMatch[3].toLowerCase();
  
  let endHour = parseInt(hoursMatch[4]);
  const endMinute = hoursMatch[5] ? parseInt(hoursMatch[5]) : 0;
  const endPeriod = hoursMatch[6].toLowerCase();
  
  // Convert to 24-hour format
  if (startPeriod === "pm" && startHour < 12) startHour += 12;
  if (startPeriod === "am" && startHour === 12) startHour = 0;
  
  if (endPeriod === "pm" && endHour < 12) endHour += 12;
  if (endPeriod === "am" && endHour === 12) endHour = 0;
  
  // Check if current time is between start and end times
  const currentTimeValue = currentHour * 60 + currentMinute;
  const startTimeValue = startHour * 60 + startMinute;
  const endTimeValue = endHour * 60 + endMinute;
  
  return currentTimeValue >= startTimeValue && currentTimeValue <= endTimeValue;
};