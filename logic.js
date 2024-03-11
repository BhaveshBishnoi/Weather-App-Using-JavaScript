let input = document.getElementById('inputbox');
let search = document.getElementById('searchbutton');
let outbox = document.getElementById('details');
//----------------------
let region = document.querySelector('#region');
let Wind = document.querySelector('#Wind')
let humidity = document.querySelector('#humidity')
let tempf = document.querySelector('#tempf')
let tempc = document.querySelector('#tempc')
//--------------------------
async function getData(cityName){
    let promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=5175720b7bc0494096e160526241103&q=${cityName}&aqi=no`)
    return await promise.json();
}
search.addEventListener('click', async function(){
    let cityName = input.value;
    let result = await getData(cityName)
    region.textContent = result.location.region;
    tempf.textContent = `${result.current.temp_f} F'`;
    tempc.textContent = `${result.current.temp_c} C'`;
    Wind.textContent =  ` ${result.current.wind_kph} Kilometer per hour`
    humidity.textContent = result.current.humidity;
})
