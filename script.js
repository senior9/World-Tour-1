fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayCountries(data));

const displayCountries = countries => {
    const mainDiv = document.getElementById("country");

                 // ***** for loop bad dile ja hoy ******
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i].name;
        
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className ='country'

    //                     // **** ei part  purber *****
    // // //     const h3 = document.createElement('h3');
    // // //     h3.innerText = country.common;

    // // //     const capital = document.createElement('p');
    // // //     capital.innerText = country.official

    // // //    countryDiv.appendChild(h3);
    // // //    countryDiv.appendChild(capital);


    //                 //  **** short for loop calc*****
    // const countryInfo = `
    //     <h3 class ="country-name">${country.common}</h3>
    //     <p>${country.official} </p>
    //     ` ;
    // countryDiv.innerHTML= countryInfo;
    // mainDiv.appendChild(countryDiv);
        
        
    // }


                    // **** for loop replace for Each*****
countries.forEach(country  => {
    const countryDiv = document.createElement('div');
        countryDiv.className ='country';
        const countryInfo = `
        <h3 class ="country-name">${country.name.common}</h3>
        <p class ="official">${country.name.official} </p>
        <button onclick = "displayCountryDetail('${country.name.common}')">Country Detail</button>
        ` ;
    countryDiv.innerHTML= countryInfo;
    mainDiv.appendChild(countryDiv);
});
 }


 const displayCountryDetail = name =>{
     const url = `https://restcountries.com/v3.1/name/${name}'`
     fetch(url)
     .then(res => res.json())
     .then (data => renderCountryInfo(data[0]));
 }

 const renderCountryInfo = country =>{
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h1> ${country.capital[0]}</h1>
    <p> Area : ${country.area}</p>
    <p>Population : ${country.population}</p>
    <p>continents : ${country.continents[0]}</p>
    <img src= "${country.flags.png}">
  `
 }

