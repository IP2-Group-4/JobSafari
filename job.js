let currentPage = 1;
let hasSearched = false;
const jobsPerPage = 5;
let currentData = [];

  function populateCities() {
      const countrySelect = document.getElementById("country");
      const citySelect = document.getElementById("city");
      citySelect.innerHTML = "";

      const country = countrySelect.value;
      if (country === "") {
          return;
      }

      // Replace the city options with the corresponding cities for the selected country
      // You can add the cities here for each country
      switch (country) {
      case "au": // Australia
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Sydney">Sydney</option>
              <option value="Melbourne">Melbourne</option>
              <option value="Brisbane">Brisbane</option>
              <option value="Perth">Perth</option>
              <option value="Adelaide">Adelaide</option>
              <option value="Gold Coast">Gold Coast</option>
              <option value="Canberra">Canberra</option>
              <option value="Newcastle">Newcastle</option>
              <option value="Hobart">Hobart</option>
              <option value="Darwin">Darwin</option>
          `;
          break;
      case "at": // Austria
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Vienna">Vienna</option>
              <option value="Graz">Graz</option>
              <option value="Linz">Linz</option>
              <option value="Salzburg">Salzburg</option>
              <option value="Innsbruck">Innsbruck</option>
              <option value="Klagenfurt">Klagenfurt</option>
              <option value="Villach">Villach</option>
              <option value="Wels">Wels</option>
              <option value="Sankt Pölten">Sankt Pölten</option>
              <option value="Dornbirn">Dornbirn</option>
          `;
          break;
      case "be": // Belgium
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Brussels">Brussels</option>
              <option value="Antwerp">Antwerp</option>
              <option value="Ghent">Ghent</option>
              <option value="Bruges">Bruges</option>
              <option value="Liege">Liege</option>
              <option value="Leuven">Leuven</option>
              <option value="Namur">Namur</option>
              <option value="Charleroi">Charleroi</option>
              <option value="Mons">Mons</option>
              <option value="Hasselt">Hasselt</option>
          `;
          break;
      case "br": // Brazil
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Sao Paulo">Sao Paulo</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Belo Horizonte">Belo Horizonte</option>
              <option value="Salvador">Salvador</option>
              <option value="Brasilia">Brasilia</option>
              <option value="Fortaleza">Fortaleza</option>
              <option value="Curitiba">Curitiba</option>
              <option value="Manaus">Manaus</option>
              <option value="Recife">Recife</option>
              <option value="Porto Alegre">Porto Alegre</option>
          `;
          break;
      case "ca": // Canada
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Toronto">Toronto</option>
              <option value="Vancouver">Vancouver</option>
              <option value="Montreal">Montreal</option>
              <option value="Calgary">Calgary</option>
              <option value="Edmonton">Edmonton</option>
              <option value="Ottawa">Ottawa</option>
              <option value="Quebec City">Quebec City</option>
              <option value="Winnipeg">Winnipeg</option>
              <option value="Hamilton">Hamilton</option>
              <option value="Halifax">Halifax</option>
          `;
          break;
      case "fr": // France
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Paris">Paris</option>
              <option value="Marseille">Marseille</option>
              <option value="Lyon">Lyon</option>
              <option value="Toulouse">Toulouse</option>
              <option value="Nice">Nice</option>
              <option value="Nantes">Nantes</option>
              <option value="Strasbourg">Strasbourg</option>
              <option value="Montpellier">Montpellier</option>
              <option value="Bordeaux">Bordeaux</option>
              <option value="Lille">Lille</option>
          `;
          break;
      case "de": // Germany
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Berlin">Berlin</option>
              <option value="Hamburg">Hamburg</option>
              <option value="Munich">Munich</option>
              <option value="Cologne">Cologne</option>
              <option value="Frankfurt">Frankfurt</option>
              <option value="Stuttgart">Stuttgart</option>
              <option value="Dusseldorf">Dusseldorf</option>
              <option value="Leipzig">Leipzig</option>
              <option value="Dortmund">Dortmund</option>
              <option value="Essen">Essen</option>
          `;
          break;
      case "in": // India
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Pune">Pune</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Surat">Surat</option>
          `;
          break;
      case "it": // Italy
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Rome">Rome</option>
              <option value="Milan">Milan</option>
              <option value="Naples">Naples</option>
              <option value="Turin">Turin</option>
              <option value="Palermo">Palermo</option>
              <option value="Genoa">Genoa</option>
              <option value="Bologna">Bologna</option>
              <option value="Florence">Florence</option>
              <option value="Venice">Venice</option>
              <option value="Verona">Verona</option>
          `;
          break;
      case "mx": // Mexico
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Mexico City">Mexico City</option>
              <option value="Guadalajara">Guadalajara</option>
              <option value="Monterrey">Monterrey</option>
              <option value="Puebla">Puebla</option>
              <option value="Tijuana">Tijuana</option>
              <option value="León">León</option>
              <option value="Juarez">Juarez</option>
              <option value="Merida">Merida</option>
              <option value="Ciudad Juárez">Ciudad Juárez</option>
              <option value="Toluca">Toluca</option>
          `;
          break;
      case "nl": // Netherlands
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Amsterdam">Amsterdam</option>
              <option value="Rotterdam">Rotterdam</option>
              <option value="The Hague">The Hague</option>
              <option value="Utrecht">Utrecht</option>
              <option value="Eindhoven">Eindhoven</option>
              <option value="Tilburg">Tilburg</option>
              <option value="Groningen">Groningen</option>
              <option value="Almere">Almere</option>
              <option value="Breda">Breda</option>
              <option value="Nijmegen">Nijmegen</option>
          `;
          break;
      case "nz": // New Zealand
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Auckland">Auckland</option>
              <option value="Wellington">Wellington</option>
              <option value="Christchurch">Christchurch</option>
              <option value="Hamilton">Hamilton</option>
              <option value="Tauranga">Tauranga</option>
              <option value="Napier">Napier</option>
              <option value="Dunedin">Dunedin</option>
              <option value="Palmerston North">Palmerston North</option>
              <option value="Nelson">Nelson</option>
              <option value="Rotorua">Rotorua</option>
          `;
          break;
      case "pl": // Poland
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Warsaw">Warsaw</option>
              <option value="Krakow">Krakow</option>
              <option value="Lodz">Lodz</option>
              <option value="Wroclaw">Wroclaw</option>
              <option value="Poznan">Poznan</option>
              <option value="Gdansk">Gdansk</option>
              <option value="Szczecin">Szczecin</option>
              <option value="Bydgoszcz">Bydgoszcz</option>
              <option value="Lublin">Lublin</option>
              <option value="Katowice">Katowice</option>
          `;
          break;
      case "ru": // Russia
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Moscow">Moscow</option>
              <option value="Saint Petersburg">Saint Petersburg</option>
              <option value="Novosibirsk">Novosibirsk</option>
              <option value="Yekaterinburg">Yekaterinburg</option>
              <option value="Nizhny Novgorod">Nizhny Novgorod</option>
              <option value="Kazan">Kazan</option>
              <option value="Chelyabinsk">Chelyabinsk</option>
              <option value="Omsk">Omsk</option>
              <option value="Samara">Samara</option>
              <option value="Rostov-on-Don">Rostov-on-Don</option>
          `;
          break;
      case "sg": // Singapore
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Singapore City">Singapore City (Central Area)</option>
              <option value="Jurong East">Jurong East</option>
              <option value="Orchard Road">Orchard Road</option>
              <option value="Marina Bay">Marina Bay</option>
              <option value="Chinatown">Chinatown</option>
              <option value="Little India">Little India</option>
              <option value="Kampong Glam">Kampong Glam</option>
              <option value="Tampines">Tampines</option>
              <option value="Woodlands">Woodlands</option>
              <option value="Sentosa">Sentosa</option>
          `;
          break;
      case "za": // South Africa
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Johannesburg">Johannesburg</option>
              <option value="Cape Town">Cape Town</option>
              <option value="Durban">Durban</option>
              <option value="Pretoria">Pretoria</option>
              <option value="Port Elizabeth">Port Elizabeth</option>
              <option value="Bloemfontein">Bloemfontein</option>
              <option value="East London">East London</option>
              <option value="Nelspruit">Nelspruit</option>
              <option value="Polokwane">Polokwane</option>
              <option value="Kimberley">Kimberley</option>
          `;
          break;
      case "es": // Spain
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Madrid">Madrid</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Valencia">Valencia</option>
              <option value="Seville">Seville</option>
              <option value="Zaragoza">Zaragoza</option>
              <option value="Malaga">Malaga</option>
              <option value="Murcia">Murcia</option>
              <option value="Palma">Palma</option>
              <option value="Las Palmas">Las Palmas</option>
              <option value="Bilbao">Bilbao</option>
          `;
          break;
      case "ch": // Switzerland
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="Zurich">Zurich</option>
              <option value="Geneva">Geneva</option>
              <option value="Basel">Basel</option>
              <option value="Bern">Bern</option>
              <option value="Lausanne">Lausanne</option>
              <option value="Lucerne">Lucerne</option>
              <option value="St. Gallen">St. Gallen</option>
              <option value="Lugano">Lugano</option>
              <option value="Winterthur">Winterthur</option>
              <option value="Bern">Bern</option>
          `;
          break;
      case "gb": // United Kingdom
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="London">London</option>
              <option value="Birmingham">Birmingham</option>
              <option value="Manchester">Manchester</option>
              <option value="Glasgow">Glasgow</option>
              <option value="Edinburgh">Edinburgh</option>
              <option value="Liverpool">Liverpool</option>
              <option value="Leeds">Leeds</option>
              <option value="Bristol">Bristol</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Newcastle upon Tyne">Newcastle upon Tyne</option>
          `;
          break;
      case "us": // USA
          citySelect.innerHTML = `
              <option value="">Select a city</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="Houston">Houston</option>
              <option value="Phoenix">Phoenix</option>
              <option value="Philadelphia">Philadelphia</option>
              <option value="San Antonio">San Antonio</option>
              <option value="San Diego">San Diego</option>
              <option value="Dallas">Dallas</option>
              <option value="San Jose">San Jose</option>
          `;
          break;
      default:
          break;
  }
}


  function onCountryChange() {
      currentPage = 1;
      hasSearched = false;
      currentData = [];
      const jobResultsDiv = document.getElementById("jobResults");
      jobResultsDiv.innerHTML = "";
      const viewMoreContainer = document.getElementById("viewMoreContainer");
      viewMoreContainer.style.display = "none";
      populateCities();
  }

  function loadMoreJobs() {
    currentPage++;
    displayJobResults(currentData, document.getElementById("country").value);
  }
  
  function searchJobs() {
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;
    const jobKeyword = document.getElementById("jobKeyword").value;
  
    if (!country || !city || !jobKeyword) {
      alert("Please select both country, city, and enter a job keyword.");
      return;
    }
  
    // Clear the previous search results before performing a new search
    currentData = [];
    const jobResultsDiv = document.getElementById("jobResults");
    jobResultsDiv.innerHTML = "";
    const viewMoreContainer = document.getElementById("viewMoreContainer");
    viewMoreContainer.style.display = "none";
  
    // Update currentPage to 1 before performing the search
    currentPage = 1;
  
    // Perform the API request here using the values selected by the user
    // Replace "{YOUR_APP_ID}" and "{YOUR_APP_KEY}" with your actual API credentials
    const apiUrl = `https://api.adzuna.com/v1/api/jobs/${country.toLowerCase()}/search/1?app_id=e21e0eae&app_key=6961fcc6610bef298f086af6e90af991&results_per_page=20&what=${encodeURIComponent(jobKeyword)}&where=${encodeURIComponent(city)}&content-type=application/json`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        currentData = data.results;
        displayJobResults(data.results, country);
        hasSearched = true;
      })
      .catch(error => {
        console.error("Error fetching jobs:", error);
        jobResultsDiv.innerHTML = "Error fetching jobs. Please try again later.";
      });
  }

  const countryMapping = {
    au: "Australia",
    at: "Austria",
    be: "Belgium",
    br: "Brazil",
    ca: "Canada",
    fr: "France",
    de: "Germany",
    in: "India",
    it: "Italy",
    mx: "Mexico",
    nl: "Netherlands",
    nz: "New Zealand",
    pl: "Poland",
    ru: "Russia",
    sg: "Singapore",
    za: "South Africa",
    es: "Spain",
    ch: "Switzerland",
    gb: "United Kingdom",
    us: "USA",
  };
  
  function displayJobResults(jobs, countryCode) {
    const jobResultsDiv = document.getElementById("jobResults");
    const viewMoreContainer = document.getElementById("viewMoreContainer");
  
    // Get the full country name from the country code using the mapping
    const country = countryMapping[countryCode];
  
    if (jobs && jobs.length > 0) {
      const startIndex = (currentPage - 1) * jobsPerPage;
      const endIndex = Math.min(startIndex + jobsPerPage, jobs.length);
  
      if (startIndex >= jobs.length) {
        jobResultsDiv.innerHTML = "No more jobs to display.";
        viewMoreContainer.style.display = "none";
        return;
      }
  
      // Show the "View More" button if there are more jobs to display
      if (endIndex < jobs.length) {
        viewMoreContainer.style.display = "block";
      } else {
        viewMoreContainer.style.display = "none";
      }
  
      let jobInfo = "";
      for (let i = startIndex; i < endIndex; i++) {
        const job = jobs[i];
        // Display relevant job information here
        jobInfo += `
                  <p>Title: ${job.title}</p>
                  <p>Company: ${job.company.display_name}</p>
                  <p>Location: ${job.location.display_name}</p>
                  <p>Country: ${country}</p>
                  <p>Salary: ${job.salary_min} - ${job.salary_max} ${job.salary_currency}</p>
                  <p><a href="${job.redirect_url}" target="_blank">View More Details</a></p>
                  <hr>
              `;
      }
  
      if (currentPage === 1) {
        // For the first page, replace existing content
        jobResultsDiv.innerHTML = jobInfo;
      } else {
        // For subsequent pages, append to existing content
        jobResultsDiv.insertAdjacentHTML("beforeend", jobInfo);
      }
    } else {
      jobResultsDiv.innerText = "No jobs found.";
      viewMoreContainer.style.display = "none";
    }
  }
