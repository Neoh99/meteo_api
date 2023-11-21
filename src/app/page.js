'use client';

import styles from './page.module.css';
import myCss from './style.css'

export default function Home() {
  const apikey = "2c57ef45ebdf36f05bdc52df8555204c";

  var city = "New York";

  const checkWeather = async () => {
    const baseApiUrl = "https://api.openweathermap.org/data/2.5/weather";

    try {
      const response = await fetch(baseApiUrl + `?q=${city}&units=metric&lang=fr&appid=${apikey}`);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  

  return (
    <>
      <body>
        <div className="card">
          <div className="search">
            {/*<input placeholder="Enter city name" defaultValue={city} spellCheck="false" />*/}
            <button onClick={checkWeather}>
              <img src = "/search.png" />
            </button>
          </div>
            <div className="weather">
              <img src="/sun.png" className="weather-icon" />
              <h1 className="temp">22°C</h1>
              <h2 className="city">New York</h2>
              <div className ="details">
                <div className="col">
                  <img src="/humidity.png" />
                  <div>
                    <p className="humidity">50%</p>
                    <p>Humidity</p>
                  </div>
                </div>
                <div className="col">
                  <img src="/wind.png" />
                  <div>
                    <p className="wind">50 km/h</p>
                    <p>Wind Speed</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </body>
    </>
  )
}
