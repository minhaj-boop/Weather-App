// API KEY
const API_KEY =  `c6fefd44650b2b3a502f4d46594db6e2`;

const searchWeather = () => {
    const city = document.getElementById('search-city');
    const searchText = city.value;
    city.value='';
    if(searchText !== '') {
        
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchText}&appid=${API_KEY}&units=metric`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data)
        );
    } else {
      alert('PLEASE ENTER A CITY');
    }
}

const setInnerText = (id,text) => {
    if(id==='weather-temp'){
        document.getElementById(id).innerText = text+'°C';
    } else if(id==='sunrise-time') {
        document.getElementById(id).innerText = text+'AM';
    } else if(id==='sunset-time') {
        document.getElementById(id).innerText = text+' PM';
    } else if(id==='weather-hour-now' || id==='weather-hour1' || id==='weather-hour2' || id==='weather-hour3' || id==='weather-hour4' ) {
        document.getElementById(id).innerText = text+'°C';        
    }
    else {
        document.getElementById(id).innerText = text;
    }
}

const displayWeather = weather => {
    if(weather.cod === '404'){
      alert(weather.message.toUpperCase());
    }
    setInnerText('weather-name', weather.city.name);
    setInnerText('weather-temp', weather.list[0].main.temp);
    setInnerText('weather-description', weather.list[0].weather[0].description.toUpperCase());
    setInnerText('weather-pressure', weather.list[0].main.pressure);
    setInnerText('weather-humidity', weather.list[0].main.humidity);
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName;
    let d;
    let url;
    let imgIcon;
    d = new Date(weather.list[0].dt * 1000);
    dayName = days[d.getDay()];
    setInnerText('weather-time-now', dayName);
    setInnerText('weather-hour-now', weather.list[0].main.temp);
    //set icon
    url = `http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`;
    imgIcon = document.getElementById('weather-icon-hour-now');
    imgIcon.setAttribute('src',url);
    
    d = new Date(weather.list[12].dt * 1000);
    dayName = days[d.getDay()];
    setInnerText('weather-time1', dayName);
    setInnerText('weather-hour1', weather.list[12].main.temp);
    //set icon
    url = `http://openweathermap.org/img/wn/${weather.list[12].weather[0].icon}@2x.png`;
    imgIcon = document.getElementById('weather-icon-hour1');
    imgIcon.setAttribute('src',url);
    
    d = new Date(weather.list[20].dt * 1000);
    dayName = days[d.getDay()];
    setInnerText('weather-time2', dayName);
    setInnerText('weather-hour2', weather.list[20].main.temp);
    //set icon
    url = `http://openweathermap.org/img/wn/${weather.list[20].weather[0].icon}@2x.png`;
    imgIcon = document.getElementById('weather-icon-hour2');
    imgIcon.setAttribute('src',url);
    
    d = new Date(weather.list[28].dt * 1000);
    dayName = days[d.getDay()];
    setInnerText('weather-time3', dayName);
    setInnerText('weather-hour3', weather.list[28].main.temp);
    //set icon
    url = `http://openweathermap.org/img/wn/${weather.list[28].weather[0].icon}@2x.png`;
    imgIcon = document.getElementById('weather-icon-hour3');
    imgIcon.setAttribute('src',url);
    
    d = new Date(weather.list[36].dt * 1000);
    dayName = days[d.getDay()];
    setInnerText('weather-time4', dayName);
    setInnerText('weather-hour4', weather.list[36].main.temp);
    //set icon
    url = `http://openweathermap.org/img/wn/${weather.list[36].weather[0].icon}@2x.png`;
    imgIcon = document.getElementById('weather-icon-hour4');
    imgIcon.setAttribute('src',url);

    setInnerText('country-name', weather.city.country);
    setInnerText('sunrise-time', msToTime(weather.city.sunrise));
    setInnerText('sunset-time', msToTime(weather.city.sunset));

    // Backgrounds
    let main = weather.list[0].weather[0].main; 
    switch (main) {
        case "Snow":
          document.getElementById("bg-body").style.backgroundImage =
            "url('https://cdn.lowgif.com/small/8388a4d9b4c11237-winter-forest-mountain-snow-moon-nature-hd-wallpaper.gif')";
          document.getElementById("bg-body").style.backgroundRepeat =
            "no-repeat";
          document.getElementById("bg-body").style.backgroundSize =
            "100% 100%";
          break;
        case "Clouds":
          document.getElementById("bg-body").style.backgroundImage =
            "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
          document.getElementById("bg-body").style.backgroundRepeat =
            "no-repeat";
          document.getElementById("bg-body").style.backgroundSize =
            "100% 100%";
          break;
        case "Fog":
          document.getElementById("bg-body").style.backgroundImage =
            "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
          document.getElementById("bg-body").style.backgroundRepeat =
            "no-repeat";
          document.getElementById("bg-body").style.backgroundSize =
            "100% 100%";
          break;
        case "Rain":
          document.getElementById("bg-body").style.backgroundImage =
            "url('https://i.pinimg.com/originals/2b/04/c2/2b04c252b82e9f1b4770e41c139e0fb9.gif')";
          document.getElementById("bg-body").style.backgroundRepeat =
            "no-repeat";
          document.getElementById("bg-body").style.backgroundSize =
            "100% 100%";
          break;
        case "Clear":
          document.getElementById("bg-body").style.backgroundImage =
            "url('https://i.pinimg.com/originals/64/ae/15/64ae1599d5869869610983f2f02db226.gif')";
          document.getElementById("bg-body").style.backgroundRepeat =
            "no-repeat";
          document.getElementById("bg-body").style.backgroundSize =
            "100% 100%";
          break;
        case "Thunderstorm":
          document.getElementById("bg-body").style.backgroundImage =
            "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
          document.getElementById("bg-body").style.backgroundRepeat =
            "no-repeat";
          document.getElementById("bg-body").style.backgroundSize =
            "100% 100%";
          break;
        default:
          document.getElementById("bg-body").style.backgroundImage =
            "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
          document.getElementById("bg-body").style.backgroundRepeat =
            "no-repeat";
          document.getElementById("bg-body").style.backgroundSize =
            "100% 100%";
          break;
      }

}

const msToTime = duration => {
    var  minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
  
    return hours + ":" + minutes;
  }


const startUpData = () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=dhaka&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) =>  displayWeather(data));
}  
startUpData();