async function searchUniversities() {
      const searchInput = document.getElementById('searchInput');
      const country = searchInput.value;

      if (country.trim() === '') {
        alert('Please enter a country.');
        return;
      }

      const url = `https://university-data.p.rapidapi.com/api/v2/country/${encodeURIComponent(country)}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'cc2ccad263msh9fec9f8b4a60e28p1d7479jsn4e250b3a7e72',
          'X-RapidAPI-Host': 'university-data.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        
        if (data === 'No data') {
          throw new Error('No information is currently available on the universities in the specified country. Please try another country.');
        }

        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('No universities found for the specified country.');
        }

        const universities = data;
        
        // Update the 'result' div with the fetched data
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';

        universities.forEach((university) => {
          const universityDiv = document.createElement('div');
          universityDiv.innerHTML = `
            <h2>${university.Name}</h2>
            <p>Country: ${university.Country}</p>
            <img src="${university.Logo}" alt="University Logo" class="logo" style="width: 200px; height: 200px;">
            <p>Wiki-Link: <a href="${university['Wiki-Link']}">${university['Wiki-Link']}</a></p>
            <p>THE-Rank: ${university.Rank['THE-Rank']}</p>
            <p>QS-Rank: ${university.Rank['QS-Rank']}</p>
            <p>ARWU-Rank: ${university.Rank['ARWU-Rank']}</p>
            <p>USNWR-Rank: ${university.Rank['USNWR-Rank']}</p>
            <p>World-Rank: ${university.Rank['World-Rank']}</p>
            <p>Type: ${university.Type}</p>
            <p>Established: ${university.Established}</p>
            <p>Founder: ${university.Founder}</p>
            <p>Accreditation: ${university.Accreditation}</p>
            <p>Endowment: ${university.Endowment}</p>
            <p>President: ${university.President}</p>
            <p>Provost: ${university.Provost}</p>
            <p>Students:</p>
            <ul>
              <li>Total: ${university.Students?.Total}</li>
              <li>Undergraduate: ${university.Students?.Undergraduate}</li>
              <li>Postgraduate: ${university.Students?.Postgraduate}</li>
            </ul>
            <p>Location:</p>
            <ul>
              <li>City: ${university.Location?.City}</li>
              <li>State: ${university.Location?.State}</li>
              <li>Country: ${university.Location?.Country}</li>
            </ul>
            <p>Campus: ${university.Campus}</p>
            <p>Website: <a href="${university.Website}">${university.Website}</a></p>
            <hr>
          `;
          resultDiv.appendChild(universityDiv);
        });
      } catch (error) {
        console.error(error);
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<p>${error.message}</p>`;
      }
    }
