import React from 'react'
import Spinner from './Spinner'
import "../assets/css/Card.css"

const Card = ({showData, loaderData ,weather, forecast}) => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = day + "/" + month + "/" + year;
  
  let url = ""
  let iconUrl = ""
  
  if(loaderData){
      return <Spinner />
  }

  if(showData){
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png"
  }
  console.log(iconUrl);
  return (
    <div>
      {
        showData === true ?(
          <>
          <div className='location-box'>
            <div className='location fs-3'>
              {weather.name}
            </div>
            <div className='date fs-4'>
              {date}
            </div>
          </div>
          <div className='weather-box'>
            <div className='temp'>
              <h3 className='fs-1'>{(weather.main.temp - 273.15).toFixed(1)}°C</h3>
              <h4 className='fs-2'>ST {(weather.main.feels_like - 273.15).toFixed(1)}°C</h4>
            </div>
            <div className='weather'>
              <p><img src={iconUrl}/>{weather.weather[0].main}</p>
            </div>
          </div>
          </>
        ):(
          <h2>Error</h2>
        )
      }
    </div>
    
  )
}

export default Card