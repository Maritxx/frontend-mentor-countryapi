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

    const newLi = document.createElement("li");
    newLi.innerText = country.name.common;

    countryList.appendChild(newLi);
}


//Runs displayCountries once page is loaded.
window.addEventListener("load", displayCountries);