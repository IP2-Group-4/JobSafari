async function getStatistics() {
    const countryInput = document.getElementById('countryInput').value;
  
    // Fetch COVID-19 statistics
    const covidResponse = await fetch(`https://disease.sh/v3/covid-19/countries/${countryInput}`);
    const covidData = await covidResponse.json();
  
    // Update COVID-19 statistics with comma-separated numbers
    document.getElementById('countryName').textContent = countryInput.toUpperCase();
    document.getElementById('totalCases').textContent = covidData.cases.toLocaleString();
    document.getElementById('totalDeaths').textContent = covidData.deaths.toLocaleString();
    document.getElementById('totalRecovered').textContent = covidData.recovered.toLocaleString();
    document.getElementById('activeCases').textContent = covidData.active.toLocaleString();
  }
  
  
  
  
  