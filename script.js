// Define the backend API base URL (replace with your actual backend URL)
const apiBaseUrl = 'http://localhost:5000/api';

// Fetch current economic data
async function fetchEconomicData() {
    try {
        const response = await fetch(`${apiBaseUrl}/economic-data`);
        const data = await response.json();

        // Update the economic data section
        const dataDisplay = document.getElementById('data-display');
        dataDisplay.innerHTML = `
            <p><strong>Inflation:</strong> ${data.inflation}%</p>
            <p><strong>CBN Interest Rate:</strong> ${data.interestRate}%</p>
            <p><strong>Stock Market Performance:</strong> ${data.stockMarket}</p>
        `;
    } catch (error) {
        console.error('Error fetching economic data:', error);
    }
}

// Fetch inflation prediction
async function fetchPrediction() {
    try {
        const response = await fetch(`${apiBaseUrl}/inflation-prediction`);
        const prediction = await response.json();

        // Update the prediction section
        const predictionOutput = document.getElementById('prediction-output');
        predictionOutput.innerHTML = `
            <p>Predicted Inflation: ${prediction.inflation}%</p>
        `;
    } catch (error) {
        console.error('Error fetching prediction:', error);
    }
}

// Run a simulation based on user input
async function runSimulation() {
    const interestRate = document.getElementById('interest-rate').value;
    const inflationRate = document.getElementById('inflation-rate').value;

    try {
        const response = await fetch(`${apiBaseUrl}/run-simulation`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ interestRate, inflationRate })
        });
        const result = await response.json();

        // Update the simulation result section
        const simulationResult = document.getElementById('simulation-result');
        simulationResult.innerHTML = `
            <p>${result.message}</p>
        `;
    } catch (error) {
        console.error('Error running simulation:', error);
    }
}

// Load data when the page loads
window.onload = () => {
    fetchEconomicData();
};


