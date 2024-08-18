
document.addEventListener('DOMContentLoaded', () => {
    let locationKey;
    let message = localStorage.getItem('message');
    document.getElementById('headLine').innerText=message;
    ftch();
    async function ftch(){
    fetch('http://dataservice.accuweather.com/locations/v1/search?q=' + message + '&apikey=A5yCaCoGAw7cAZj3IfziN3Tju6MUNNA7')
        .then(response => response.json())
        .then(data => {
            locationKey = data[0].Key;
            fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + locationKey + "?apikey=A5yCaCoGAw7cAZj3IfziN3Tju6MUNNA7&language=en-us&details=true&metric=true")
                .then(response => response.json())
                .then(data => {
                    dataUpdater(data);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                });
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
    }

    function dataUpdater(xyz) {
        firstDataUpdater(xyz.DailyForecasts[0]);
        secDataUpdater(xyz.DailyForecasts[1]);
        thirdDataUpdater(xyz.DailyForecasts[2]);
        fourthDataUpdater(xyz.DailyForecasts[3]);
        fifthDataUpdater(xyz.DailyForecasts[4]);
    }
    function firstDataUpdater(f) {
        let date = f.Date;
        let newDate = "";
        for (let i = 0; i < 10; i++) {
            newDate += date[i];
        }
        document.getElementById('fdate').innerText = "Date: " + newDate;
        let maxTemp = f.Temperature.Maximum.Value;
        let minTemp = f.Temperature.Minimum.Value;
        let dayRain = f.Day.RainProbability;
        let nightRain = f.Night.RainProbability;
        document.getElementById('fmintemp').innerText = minTemp;
        document.getElementById('fmaxtemp').innerText = maxTemp;
        document.getElementById('fdayrain').innerText = dayRain;
        document.getElementById('fnightrain').innerText = nightRain;
    }
    function secDataUpdater(s) {
        let date = s.Date;
        let newDate = "";
        for (let i = 0; i < 10; i++) {
            newDate += date[i];
        }
        document.getElementById('sdate').innerText = "Date: " + newDate;
        let maxTemp = s.Temperature.Maximum.Value;
        let minTemp = s.Temperature.Minimum.Value;
        let dayRain = s.Day.RainProbability;
        let nightRain = s.Night.RainProbability;
        document.getElementById('smintemp').innerText = minTemp;
        document.getElementById('smaxtemp').innerText = maxTemp;
        document.getElementById('sdayrain').innerText = dayRain;
        document.getElementById('snightrain').innerText = nightRain;
    }
    function thirdDataUpdater(t)
    {
        let date = t.Date;
        let newDate = "";
        for (let i = 0; i < 10; i++) {
            newDate += date[i];
        }
        document.getElementById('tdate').innerText = "Date: " + newDate;
        let maxTemp = t.Temperature.Maximum.Value;
        let minTemp = t.Temperature.Minimum.Value;
        let dayRain = t.Day.RainProbability;
        let nightRain = t.Night.RainProbability;
        document.getElementById('thmintemp').innerText = minTemp;
        document.getElementById('thmaxtemp').innerText = maxTemp;
        document.getElementById('thdayrain').innerText = dayRain;
        document.getElementById('thnightrain').innerText = nightRain;
    }
    function fourthDataUpdater(fo)
    {
        let date = fo.Date;
        let newDate = "";
        for (let i = 0; i < 10; i++) {
            newDate += date[i];
        }
        document.getElementById('fodate').innerText = "Date: " + newDate;
        let maxTemp = fo.Temperature.Maximum.Value;
        let minTemp = fo.Temperature.Minimum.Value;
        let dayRain = fo.Day.RainProbability;
        let nightRain = fo.Night.RainProbability;
        document.getElementById('fomintemp').innerText = minTemp;
        document.getElementById('fomaxtemp').innerText = maxTemp;
        document.getElementById('fodayrain').innerText = dayRain;
        document.getElementById('fonightrain').innerText = nightRain;
    }
    function fifthDataUpdater(fi)
    {
        let date = fi.Date;
        let newDate = "";
        for (let i = 0; i < 10; i++) {
            newDate += date[i];
        }
        document.getElementById('fidate').innerText = "Date: " + newDate;
        let maxTemp = fi.Temperature.Maximum.Value;
        let minTemp = fi.Temperature.Minimum.Value;
        let dayRain = fi.Day.RainProbability;
        let nightRain = fi.Night.RainProbability;
        document.getElementById('fimintemp').innerText = minTemp;
        document.getElementById('fimaxtemp').innerText = maxTemp;
        document.getElementById('fidayrain').innerText = dayRain;
        document.getElementById('finightrain').innerText = nightRain;
    }



    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.content').style.display = 'block';

        const forecasts = document.querySelectorAll('.forecast');
        forecasts.forEach((forecast, index) => {
            setTimeout(() => {

                forecast.classList.add('visible');
            }, index * 200);
        });

    }, 2500);
});
