document.querySelector('#search-form').addEventListener("submit",grabText)
const searchQuery = document.querySelector("#input");

function grabText(e){

    console.log("hello-world")


    fetch("https://coronavirus-19-api.herokuapp.com/countries")
        .then(response=>response.json())
        .then(data=>{ 
            
            let country=findCountry(data)
            if(country ===undefined) return 'country not found'
            document.querySelector("#country-name").innerText=country.country
            document.querySelector("#new").innerText=country.todayCases
            document.querySelector("#active").innerText=country.active
            document.querySelector("#death").innerText=country.deaths
            document.querySelector("#recovered").innerText=country.recovered
            document.querySelector("#total").innerText=country.cases
            document.querySelector("#critical").innerText=country.critical
        } )
    e.preventDefault()

    function findCountry(countries){
        const query = searchQuery.value;

        let foundCountry;
       for (let index = 0; index < countries.length; index++) {
           if(countries[index]['country'].toLowerCase() == query.toLowerCase().trim()){
               foundCountry = countries[index];
               break;
           }
       }

       return foundCountry;
    }
    
    
}

document.querySelector("#clear-field").addEventListener('click',clear)
function clear(e){
    searchQuery.value=''
    e.preventDefault()
}

