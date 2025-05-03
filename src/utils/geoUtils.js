/**
 * Calculate distance between two geographical points using the Haversine formula
 * @param {number} lat1 - First point latitude
 * @param {number} lon1 - First point longitude
 * @param {number} lat2 - Second point latitude
 * @param {number} lon2 - Second point longitude
 * @returns {number} Distance in miles
 */
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  // Convert degrees to radians
  const toRadians = (degrees) => degrees * Math.PI / 180;
  
  // Log inputs for debugging
  console.log(`Calculating distance between: (${lat1},${lon1}) and (${lat2},${lon2})`);
  
  // Check for invalid inputs
  if (!lat1 || !lon1 || !lat2 || !lon2 || 
      isNaN(parseFloat(lat1)) || isNaN(parseFloat(lon1)) || 
      isNaN(parseFloat(lat2)) || isNaN(parseFloat(lon2))) {
    console.error("Invalid coordinates provided for distance calculation");
    return undefined;
  }
  
  const R = 3958.8; // Earth's radius in miles
  const φ1 = toRadians(lat1);
  const φ2 = toRadians(lat2);
  const Δφ = toRadians(lat2 - lat1);
  const Δλ = toRadians(lon2 - lon1);

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
  const distance = R * c;
  console.log(`Calculated distance: ${distance.toFixed(2)} miles`);
  
  return distance;
};