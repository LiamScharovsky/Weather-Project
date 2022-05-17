let apiKey = '9a002ddf6ea9e6ef8ec94101ff959868'

function getWeather(city) {
    fetch( 
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey)
            .then((response) => response.json())
        .then((response) => this.showData(response));
}

function showData(data) {
    const {name} = data;                                                //Name of city is whatever user types in
    const {temp, humidity} = data.main;                                 //Get the temperature and the humidity
    const high = data.main['temp_max'];
    const min = data.main['temp_min'];
    const forecast = data.weather[0]['description'];
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".temperature").innerText = Math.round(temp - 273.15) + "°C / " + Math.round(1.8 * (temp - 273) + 32) + "°F";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity +"%";
    document.querySelector(".high").innerText = "High: " + Math.round(high - 273.15) + "°C / " + Math.round(1.8 * (high - 273) + 32) + "°F";
    document.querySelector(".low").innerText = "Low: " + Math.round(min - 273.15) + "°C / " + Math.round(1.8 * (min - 273) + 32) + "°F";;
    document.querySelector(".forecast").innerText = "Forecast: " + forecast;
}

function search (){
    this.getWeather(document.querySelector("#searchWeather").value)
}

document.querySelector("#submitWeather").addEventListener('click',function(){
    search();

});
    document.querySelector("#searchWeather").addEventListener('keyup', function (event) {
    if (event.key == "Enter")
        {search();}


});