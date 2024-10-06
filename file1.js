function predictDisease() {
    const fileInput = document.getElementById('disease-image');
    const resultDisplay = document.getElementById('disease-result');

    if (fileInput.files.length == 0) {
        resultDisplay.textContent = 'Please upload an image.';
        return;
    }

    // Simulating an API call for disease prediction
    setTimeout(() => {
        resultDisplay.textContent = 'Disease detected: Early blight';
    }, 2000); // Simulating a delay of 2 seconds
}

// Rainfall Prediction Simulation
function predictRainfall() {
    const locationInput = document.getElementById('location-input').value;
    const resultDisplay = document.getElementById('rainfall-result');
    if (locationInput == '') {
        resultDisplay.textContent = 'Please enter a location.';
        return;
    }

    
    const apiKey = '';
    const apiUrl = ''

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Location not found');
            }
            return response.json();
        })
        .then(data => {
            // Extract weather data
            const description = data.weather[0].description;
            const rainfall = data.rain ? data.rain['1h'] || 0 : 0; 
            const temperature = data.main.temp;
            resultDisplay.textContent = `Weather in ${locationInput}: ${description}. Temperature: ${temperature}°C. Rainfall: ${rainfall}mm.`;
        })
        .catch(error => {
            console.log('Error:', error); // Log any error
            resultDisplay.textContent = error.message;
        });
        

}