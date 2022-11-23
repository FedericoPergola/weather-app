import React, { useState } from 'react'
import Form from './Form';
import Card from './Card';

const WeatherInfo = () => {

    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=854a2aedd72a89e6936520258cde888d';
    let urlCity = "&q=";
    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=854a2aedd72a89e6936520258cde888d";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loader, setLoader] = useState(false);
    const [location, setLocation] = useState("");
    const [show, setShow] = useState(false)

    //Llamada a la api
    const getLocation = async (loc) =>{
        setLoader(true);
        setLocation(loc);

        //Weather
        urlWeather = urlWeather + urlCity + loc;
        console.log(urlWeather);

        await fetch(urlWeather).then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) =>{
            console.log(weatherData)
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoader(false);
            setShow(false);
        })

        //Forecast
        urlForecast = urlForecast + urlCity + loc;

        await fetch(urlForecast).then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) =>{
            console.log(forecastData)
            setForecast(forecastData);
            setLoader(false);
            setShow(true);
        }).catch(error =>{
            console.log(error);
            setLoader(false);
            setShow(false);
        })
    }

    return (
        <React.Fragment>

        <Form 
            newLocation = {getLocation}
        />

        <Card 
            showData = {show}
            loaderData = {loader}
            weather = {weather}
            forecast = {forecast}
        />

        </React.Fragment>
    )
}

export default WeatherInfo