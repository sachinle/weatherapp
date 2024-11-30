// function display(){

// let city=document.getElementById("inputvalue").value;
// const apiKey="d4994ebad8814aa780284655242709";
// const apiUrl=`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

// axios.get(apiUrl).then(response=>{
//     const weatherdata=response.data;
//     const weatherinfo= `
//     <p>Name:${weatherdata.location.name}</p>
//      <p>Region:${weatherdata.location.region}</p>
//      <p>Temperature:${weatherdata.current.temp_c}</p>
    
    
//     `
//     document.getElementById("weather").innerHTML=weatherinfo;

// })

// }

function display() {
    let city = document.getElementById("inputvalue").value;
    const apiKey = "d4994ebad8814aa780284655242709";
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    axios.get(apiUrl).then(response => {
        const weatherdata = response.data;
        const weather = weatherdata.current.condition.text.toLowerCase();
        const weatherinfo = `
            <p>Name: ${weatherdata.location.name}</p>
            <p>Region: ${weatherdata.location.region}</p>
            <p>Temperature: ${weatherdata.current.temp_c}°C</p>
            <p>Condition: ${weatherdata.current.condition.text}</p>
        `;
        document.getElementById("weather").innerHTML = weatherinfo;

        // Change background based on weather condition
        setWeatherBackground(weather);
    }).catch(error => {
        document.getElementById("weather").innerHTML = "City not found!";
    });
}

function setWeatherBackground(weather) {
    const body = document.body;
    body.className = ''; // Remove any existing weather class
    if (weather.includes('clear') || weather.includes('sun')) {
        body.classList.add('sunny');
    } else if (weather.includes('cloud')) {
        body.classList.add('cloudy');
    } else if (weather.includes('rain')) {
        body.classList.add('rainy');
    } else if (weather.includes('snow')) {
        body.classList.add('snowy');
    } else if (weather.includes('thunder')) {
        body.classList.add('thunderstorm');
    } else {
        body.classList.add('cloudy'); // Default to cloudy
    }
}




