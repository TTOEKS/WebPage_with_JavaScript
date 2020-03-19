//url = "https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric"


/*
    1. open https://openweathermap.org/
    2. signup or sign in https://openweathermap.org/
    3. copy and paste your API KEY in API_KEY 
*/
// Here input your API_KEY at https://openweathermap.org/
const API_KEY = "HERE IS YOUR API KEY";
const LS_LOCATION = "location";
const weather_form = document.querySelector(".weather-form"),
    main_info = weather_form.querySelector('h4'),
    addition_info = weather_form.querySelector('p');



function get_location() {
    const temp = localStorage.getItem(LS_LOCATION);

    return JSON.parse(temp);
}

function get_weather(latitude, longitude) {
    console.log(latitude + ", " + longitude);
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
        .then(function(response) {
            // console.log(response.json());
            return response.json();
        })
        .then(function(json) {
            console.log(json);
            const country = json.sys.country;
            const weather = json.weather[0].main;
            const temperatrue = parseInt(json.main.temp);
            const feel_like = json.main.feels_like;
            const area = json.name;

            const main_info_output = `${country}, ${weather}, ${temperatrue}°C`;
            const add_info_ooutput = `${area}, you feel like ${feel_like}°C`;

            main_info.innerText = main_info_output;
            addition_info.innerText = add_info_ooutput;

        });
}

function save_location(coordsObj) {
    console.log(coordsObj);
    localStorage.setItem(LS_LOCATION, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    // console.log(position);

    const latitude = position.coords.latitude,
        longitude = position.coords.longitude;

    coordsObj = {
        latitude,
        longitude
    };

    save_location(coordsObj);
    get_weather(coordsObj.latitude, coordsObj.longitude);


}

function ErrGeoload() {
    alert('Failed to load location info');
}

function load_geo() {
    const navi_info = navigator.geolocation.getCurrentPosition(handleGeoSuccess, ErrGeoload);
}



function init() {
    // local storage don't know user loaction info
    if (localStorage.getItem(LS_LOCATION) == null) {
        console.log(`${LS_LOCATION} is empty`);
        load_geo();
    }
    // user location info already save in local storage
    else {
        const coordsObj = get_location();
        get_weather(coordsObj.latitude, coordsObj.longitude);
    }

}

init();