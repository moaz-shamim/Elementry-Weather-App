const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0e4ebf65b0msh01ab4ad8cf16f59p178e96jsna2ec86e37a81',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


getWeather = (myInputCity) => {

    cityName.innerHTML = myInputCity





    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + myInputCity, options)
        .then(response => {
            return response.json();
        })
        .then((response) => {
            console.log(response);

            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

            temp2.innerHTML = response.temp
            humidity2.innerHTML = response.humidity
            wind_speed2.innerHTML = response.wind_speed
            wind_speed3.innerHTML = response.wind_speed


        })

        .catch((error) => { console.log(error); })

}



submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(myInputCity.value)
})














getspecialWeather1 = (myInputCity) => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + myInputCity, options)
        .then(response => {
            return response.json();
        })
        .then((response) => {
            console.log(response);

            temp_07.innerHTML = response.temp
            feels_like_01.innerHTML = response.feels_like
            humidity_02.innerHTML = response.humidity
            min_temp_04.innerHTML = response.min_temp
            max_temp_03.innerHTML = response.max_temp
            wind_speed_09.innerHTML = response.wind_speed
            wind_degrees_08.innerHTML = response.wind_degrees
            sunrise_05.innerHTML = response.sunrise
            sunset_06.innerHTML = response.sunset

        })

        .catch((error) => { console.log(error); })

}
getspecialWeather2 = (myInputCity) => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + myInputCity, options)
        .then(response => {
            return response.json();
        })
        .then((response) => {
            console.log(response);

            temp_17.innerHTML = response.temp
            feels_like_11.innerHTML = response.feels_like
            humidity_12.innerHTML = response.humidity
            min_temp_14.innerHTML = response.min_temp
            max_temp_13.innerHTML = response.max_temp
            wind_speed_19.innerHTML = response.wind_speed
            wind_degrees_18.innerHTML = response.wind_degrees
            sunrise_15.innerHTML = response.sunrise
            sunset_16.innerHTML = response.sunset

        })

        .catch((error) => { console.log(error); })

}
getspecialWeather3 = (myInputCity) => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + myInputCity, options)
        .then(response => {
            return response.json();
        })
        .then((response) => {
            console.log(response);

            temp_27.innerHTML = response.temp
            feels_like_21.innerHTML = response.feels_like
            humidity_22.innerHTML = response.humidity
            min_temp_24.innerHTML = response.min_temp
            max_temp_23.innerHTML = response.max_temp
            wind_speed_29.innerHTML = response.wind_speed
            wind_degrees_28.innerHTML = response.wind_degrees
            sunrise_25.innerHTML = response.sunrise
            sunset_26.innerHTML = response.sunset

        })

        .catch((error) => { console.log(error); })

}












getspecialWeather1("Shanghai")
getspecialWeather2("Boston")
getspecialWeather3("Dubai")
getWeather("Patna")















