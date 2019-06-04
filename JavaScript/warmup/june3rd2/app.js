const randomCountry = document.querySelector('.randomCountry');
const  ctryName = document.querySelector('.ctryName');
const city = document.querySelector('.city');

randomCountry.addEventListener('click',()=>{
    fetch('https://restcountries.eu/rest/v2/region/africa')
    .then(result =>{
        return result.json();
    })
    .then(name=>{
        ctryName.src = name;
    });
});

 
