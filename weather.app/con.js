let weather = {
    "apiKey": "f36a2eb6e90e1e8dcaa3d1cc473da41b",
    fetchweather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid=f36a2eb6e90e1e8dcaa3d1cc473da41b" 
        ).then((response) => response.json())
        .then((data) => this.displayweather(data));
    },
    displayweather: function(data) {
        console.log(data)
        const{ name } = data;
        const { icon, description} = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "wind speed: " + speed + " km/h";

    },
    search: function() {
        this.fetchweather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".searchbutton").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key =="Enter") {
        weather.search();
    }
})