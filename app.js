var button = document.querySelector('.weatherSubmit');
var city = document.querySelector('.cityInput');
var userCity = document.querySelector('.displayCity');
var temp = document.querySelector('.displayTemp');
var desc = document.querySelector('.displayDesc');
var img = document.getElementById('weatherIcon');


// CAPTIALIZE FIRST CHARACTER OF STRING-------------
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// CALL API ON SUBMIT CLICK-------------------------
button.addEventListener('click', function (name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&units=imperial&appid=a2e114cdb60f2f87e8096d408c845afd')

        // TURN RESPONSE TO JSON AND RETRIEVE DATA----------
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
            var icon = data['weather'][0]['icon'];

            // TURN TEMP TO ROUND NUMBER-----------------------
            var roundTemp = Math.floor(tempValue);

            var upperDesc = capitalize(descValue);
            // CHANGE HTML WITH DATA INFO----------------------
            userCity.innerHTML = nameValue;
            temp.innerHTML = roundTemp + "°";
            desc.innerHTML = upperDesc;
            img.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        })

        .catch(err => console.log(err));
})