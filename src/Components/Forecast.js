import {useEffect, Suspense} from "react";
import React, {useState} from 'react';
import {ForecastDayDTO} from "./ForecastDayDTO";
import {NavbarTemplate} from "./NavbarTemplate";
import {getWeatherForLocation} from "../services/forecastService";
import {Footer} from "./Footer";

export const Forecast = () => {

    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            getWeatherForLocation()
                .then(result => {
                    setWeatherData(result);
                })
        }, 1000);
    }, []);

    useEffect(() => {
        const currentStyle = document.body.style;
        currentStyle.backgroundImage = `url("https://res.cloudinary.com/dhr071bhp/image/upload/v1672599532/peak-climber-pictures/weather-images/pink-clouds_qihl0l.jpg")`;
        currentStyle.backgroundPosition = "center center";
        currentStyle.backgroundRepeat = "no-repeat";
        currentStyle.backgroundAttachment = "fixed";
        currentStyle.backgroundSize = "cover";
    })

    let forecast = Array.from(weatherData)
    // noinspection JSValidateTypes
    return (
        <div>
            <NavbarTemplate/>
            <h3 style={{marginTop: '130px'}}>Forecast data for our users</h3>
            <Suspense fallback={<p>Loading...</p>}>
                {forecast.length > 0
                    ? forecast.map(day => <ForecastDayDTO key={day.date_} dayDTO={day}/>)
                    : <p>Nothing yet!</p>
                }
            </Suspense>
            <Footer/>
        </div>
    );
}