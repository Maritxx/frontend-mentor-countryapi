//Function that displays fetched countries in DOM.
const displayCountries = async function() {
    try {
        const countryData = await getCountryData();
        
        countryData.forEach((country) => {
            createCountryItem(country);
        });

    } catch (error) {
        console.log(error);
    }
}


//Function that creates new LI for every country.
const createCountryItem = function(country) {
    const countryList = document.getElementById("country-list");
    const newCountryItem = document.createElement("li");

    const countryFlag = document.createElement("img");
    countryFlag.src = country.flags.svg;

    const countryName = document.createElement("h2");
    countryName.innerText = country.name.common;

    const countryPopulation = document.createElement("span")
    countryPopulation.innerHTML = "<b>Population: </b>" + country.population;

    const countryRegion = document.createElement("span")
    countryRegion.innerHTML = "<b>Region: </b>" + country.region;

    const countryCapital = document.createElement("span");
    countryCapital.innerHTML = "<b>Capital: </b>" + country.capital;

    countryList.appendChild(newCountryItem);
    newCountryItem.appendChild(countryFlag);
    newCountryItem.appendChild(countryName);
    newCountryItem.appendChild(countryPopulation);
    newCountryItem.appendChild(countryRegion);
    newCountryItem.appendChild(countryCapital);
}


//Runs displayCountries once page is loaded.
window.addEventListener("load", displayCountries);