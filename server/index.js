const express = require('express');
const app = express();
const cors = require('cors');
const { use } = require('react');

app.use(cors({
    origin: "http://localhost:3000", 
    credentials: true
}));
  
app.use(express.json());

// server side
// all third party api calls go here 
const googleApiKey = "AIzaSyDZ0rslX7TegCg_8Qo8YuaeduMAYiUAkdg";

const convertAddress = async(address) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${googleApiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "OK" && data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry.location;
            // console.log( "adrerss has coordinate of: ", "{ ", lat, ", ", lng, "}")
            return { lat, lng };
        } else {
            console.error(`Geocoding failed for "${address}":`, data.status);
            return null;
        }
    } catch (error) {
        console.error("Error during geocoding:", error);
        return null;
    }
}


const calculateDistance = async (origin, destination) => {
    const originCoords = `${origin.lat},${origin.lng}`;
    const destinationCoords = `${destination.lat},${destination.lng}`;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originCoords}&destinations=${destinationCoords}&mode=driving&key=${googleApiKey}`;

    try {
      const response = await fetch(url);
      const result = await response.json();

      console.log("originCoords: ", originCoords);
      console.log("destinationCoords: ", destinationCoords);

      const distanceInMeters = result.rows[0].elements[0].distance.value;
      return distanceInMeters / 1000;
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };


app.post("/api/calculate-distances", async (req, res) => {
    const { origin, destinations } = req.body;
  
    try {
        const enriched = await Promise.all(
          destinations.map(async (address) => {
            const destination = await convertAddress(address);
            const distance = await calculateDistance(origin, destination);
            return { address, distance };
          })
        );
    
        res.json({ distances: enriched });
    } catch (error) {
    console.error("Distance calc error:", error);
    res.status(500).json({ error: "Failed to calculate distances" });
    }
});

app.get('/', (res) => {
    res.send('Hello from our server!')
})

app.listen(8080, () => {
    console.log('server listening on port 8080')
})