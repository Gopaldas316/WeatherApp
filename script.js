const Form = document.querySelector('form');
const Input = document.querySelector('input');
const place = document.querySelector('.place');
const description = document.querySelector('.description');
const temperature = document.querySelector('.temperature');
const Image = document.querySelector('img');

const api_key = "d885aa1d783fd13a55050afeef620fcb";
const base_url = `https://api.openweathermap.org/data/2.5/weather?q=`;

const consoling =  (e) => {
    e.preventDefault();
    const location = Input.value;
    Input.value = "";
    //console.log(location);
    //console.log(`${base_url}${location}&appid=${api_key}`);
    fetch(`${base_url}${location}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const {weather,main, name} = data;
        place.textContent = name;
        temperature.textContent = Math.floor(main.temp-273.15);
        description.textContent = weather[0].main;
        //description.textContent = weather.description;
        //https://openweathermap.org/img/wn/50n@4x.png
        Image.src = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;
    })

}

Form.addEventListener('submit', consoling)

//d885aa1d783fd13a55050afeef620fcb

const icon = document.querySelector('.cloud');
var skycons = new Skycons({"color": "white"});

skycons.add(icon , Skycons.PARTLY_CLOUDY_DAY);
skycons.play();
//#6cdbeb