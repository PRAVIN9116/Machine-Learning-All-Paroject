// Function to get query parameters from the URL
function getQueryParameters() {
    const urlParams = new URLSearchParams(window.location.search);

    const tempMin = urlParams.get('temp_min');
    const tempMax = urlParams.get('temp_max');
    const precipitation = urlParams.get('precipitation');
    const wind = urlParams.get('wind');
    const month = urlParams.get('month');
    const day = urlParams.get('day');

    return {
        tempMin,
        tempMax,
        precipitation,
        wind,
        month,
        day
    };
}

// Function to fetch data from the backend
async function fetchData() {
    try {
        const data = getQueryParameters();  // Get query parameters

        // Perform the fetch request (change to local URL or actual API URL)
        const response = await fetch('https://your-backend-url.com/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)  // Send data as JSON
        });

        // Assuming the response is in JSON format
        const result = await response.json();

        console.log(result);  // Do something with the result
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

// Call the fetchData function when the script loads
fetchData();
