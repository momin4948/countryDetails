fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data => displayFunction(data));

const displayFunction = countries => {
    const mainDiv = document.getElementById('Countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        const countryInfo = `
        
        <h2 class = 'name'>${country.name}</h2>
        <p class = 'capital'>${country.capital}</p>

        `
        countryDiv.innerHTML = countryInfo;
        mainDiv.appendChild(countryDiv);
        // const h2 = document.createElement('h2');
        // h2.innerText = country.name;

        // const p = document.createElement('p');
        // p.innerText = country.capital;

        // countryDiv.appendChild(h2);
        // countryDiv.appendChild(p);
        // mainDiv.appendChild(countryDiv);

    }
}