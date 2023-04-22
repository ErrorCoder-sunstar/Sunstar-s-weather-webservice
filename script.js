var cityinput = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "58f2d27d9dbf94aba931f24308df63ad"

function convertion(val)
{
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityinput.value+'&appid='+apik+'&units=metric')
    .then(res => res.json())

    .then(data =>
        {
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var windspd = data['wind']['speed']
            description.innerHTML = `${descrip}`
            temp.innerHTML = `${tempature} c`
            wind.innerHTML = `${windspd} km/h`
        })
        .catch(err => alert('check city name or network connection'))
})