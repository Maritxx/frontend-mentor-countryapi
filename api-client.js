//Fetches the data from the API.
const getCountryData = async function() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
        const countryData = await response.json();
        console.log(countryData);
        return countryData;
        
    } catch (error) {
        console.log(error);
    }
}

getCountryData();