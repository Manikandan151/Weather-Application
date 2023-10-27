const apiKey="1b7800fc641a7b35bfa637151b847ff1";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const inputImg = document.querySelector(".weather-icon");


async function checkWeather(city){
    try{
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(!response.ok){
        
        throw new Error('Network response was not ok');
        
    }
    const data = await response.json();
    console.log(data);
    var city = document.querySelector(".city");
    city.innerHTML = data.name;

    var temperature = document.querySelector(".temp");
    temperature.innerHTML = Math.round(data.main.temp)+"°C";

    var humidity = document.querySelector(".humidity");
    humidity.innerHTML = data.main.humidity+"%";

    var windSpeed = document.querySelector(".wind");
    windSpeed.innerHTML = data.wind.speed+"km/hr";


    if(data.weather[0].main=='Cloud'){
         inputImg.src="images/clouds.png";
    }
    else if(data.weather[0].main=='Clear'){
        inputImg.src = "images/clear.png";
    }
    else if(data.weather[0].main=='Rain'){
        inputImg.src = "images/rain.png";
    }
    else if(data.weather[0].main=='Drizzle'){
        inputImg.src = "images/drizzle.png";
    }
    else if(data.weather[0].main=='Mist'){
        inputImg.src = "images/mist.png";
    }

    var weatherDisplay = document.querySelector(".weather");
    weatherDisplay.style.display ="block";
    var err = document.querySelector(".error");
        err.style.display="none";
}
catch(error){
    var err = document.querySelector(".error");
        err.style.display="block";
         
        var weatherDisplay = document.querySelector(".weather");
        weatherDisplay.style.display ="none";  
     console.log('error',error);
}
}

  searchBtn.addEventListener("click",()=>{
      checkWeather(searchBox.value);
      
      
  })

 






