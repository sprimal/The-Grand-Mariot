
const apiKey = "249e74bd72a740518513aeb103a086ab";

// Initialize the map
var map = L.map('map').setView([50.9621, 4.4145], 13); // Default center

// Add Geoapify tile layer
L.tileLayer(`https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${apiKey}`, {
    attribution: '&copy; OpenStreetMap contributors & Geoapify'
}).addTo(map);


// Function to get and display the route
async function getRoute() {
    const waypoints = [
        { lat: 43.785513068486615, lon: -79.22821748156409 },  // Start point
        { lat: 43.79957728584332, lon: -79.20130956139161 }   // End point, 
    ];

    // Construct the API URL
    const url = `https://api.geoapify.com/v1/routing?waypoints=${waypoints.map(wp => `${wp.lat},${wp.lon}`).join('|')}&mode=drive&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const result = await response.json();

        // Check if we got a valid route
        if (result.features && result.features.length > 0) {
            const coordinates = result.features[0].geometry.coordinates;
            
            // Convert coordinates from [lon, lat] to [lat, lon]
            const latLngs = coordinates.map(coord => [coord[1], coord[0]]);

            // Draw the route
            L.polyline(latLngs, { color: 'blue', weight: 5 }).addTo(map);

            // Add markers at start and end points
            L.marker([waypoints[0].lat, waypoints[0].lon]).addTo(map)
                .bindPopup("Start Point").openPopup();

            L.marker([waypoints[1].lat, waypoints[1].lon]).addTo(map)
                .bindPopup("End Point").openPopup();

            // Fit map to route
            map.fitBounds(L.polyline(latLngs).getBounds());
        } else {
            console.log("No route found.");
        }
    } catch (error) {
        console.error("Error fetching route:", error);
    }
}

// Call the function to get and display the route
getRoute();
    