
// Mock data for demonstration purposes
const economicData = {
    inflationRates: [
        { month: "January", rate: 15.3 },
        { month: "February", rate: 15.6 },
        { month: "March", rate: 16.2 },
        { month: "April", rate: 16.7 },
        { month: "May", rate: 17.1 },
        { month: "June", rate: 17.5 },
    ],
    interestRates: [
        { month: "January", rate: 12.5 },
        { month: "February", rate: 12.7 },
        { month: "March", rate: 13.1 },
        { month: "April", rate: 13.5 },
        { month: "May", rate: 13.8 },
        { month: "June", rate: 14.0 },
    ]
};

// Function to display current economic data
function displayCurrentData() {
    const currentDataDiv = document.getElementById("currentData");
    let dataHtml = "<h3>Current Inflation and Interest Rates</h3><ul>";

    // Display the latest inflation and interest rate
    const latestInflation = economicData.inflationRates[economicData.inflationRates.length - 1];
    const latestInterest = economicData.interestRates[economicData.interestRates.length - 1];
    
    dataHtml += `<li>Latest Inflation Rate (${latestInflation.month}): ${latestInflation.rate}%</li>`;
    dataHtml += `<li>Latest Interest Rate (${latestInterest.month}): ${latestInterest.rate}%</li>`;
    
    dataHtml += "</ul>";
    currentDataDiv.innerHTML = dataHtml;
}

// Function to simulate an inflation prediction
function getLatestPrediction() {
    const predictionOutput = document.getElementById("predictionOutput");

    // Simulate a basic prediction using the trend in historical data
    const lastTwoRates = economicData.inflationRates.slice(-2);
    const predictedRate = (lastTwoRates[0].rate + lastTwoRates[1].rate) / 2 + 0.5; // Adding a small increment for trend

    predictionOutput.innerText = `Predicted Inflation Rate for next month: ${predictedRate.toFixed(2)}%`;
}

// Function to run a simulation based on user inputs
function runSimulation() {
    const interestRateInput = document.getElementById("interestRateInput").value;
    const inflationRateInput = document.getElementById("inflationRateInput").value;
    const simulationOutput = document.getElementById("simulationOutput");

    // Validate user inputs
    if (!interestRateInput || !inflationRateInput) {
        alert("Please enter both interest and inflation rates.");
        return;
    }

    const interestRate = parseFloat(interestRateInput);
    const inflationRate = parseFloat(inflationRateInput);

    // Simple simulation logic
    let economicOutlook;
    if (interestRate < 10 && inflationRate < 10) {
        economicOutlook = "Stable economic growth";
    } else if (interestRate >= 10 && inflationRate >= 10) {
        economicOutlook = "Potential economic slowdown";
    } else if (interestRate >= 10 && inflationRate < 10) {
        economicOutlook = "High interest rate may curb inflation";
    } else {
        economicOutlook = "Low interest rate might lead to inflation";
    }

    simulationOutput.innerText = `Based on an interest rate of ${interestRate}% and an inflation rate of ${inflationRate}%, the economic outlook is: ${economicOutlook}.`;
}

// Event listeners for buttons
document.getElementById("getPredictionButton").addEventListener("click", getLatestPrediction);
document.getElementById("runSimulationButton").addEventListener("click", runSimulation);

// Initialize the dashboard with current data
displayCurrentData();
