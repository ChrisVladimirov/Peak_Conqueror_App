import {useEffect, Suspense} from "react";
import React, {useState} from 'react';
import {ForecastDayDTO} from "./ForecastDayDTO";
import {NavbarTemplate} from "./NavbarTemplate";
import {getWeatherForLocation} from "../services/forecastService";
import {Footer} from "./Footer";
import {Link} from "react-router-dom";

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
            <h3 style={{marginTop: '8em'}}>Forecast data for our users</h3>

            <section className="d-flex justify-content-center align-self-center" style={{margin:'6em'}}>
                <Suspense fallback={<p>Loading...</p>}>
                    {forecast.length > 0
                        ? forecast.map(day => <ForecastDayDTO key={day.date_} dayDTO={day}/>)
                        : <p style={{fontSize: '2em'}}>Loading...</p>
                    }
                </Suspense>
            </section>
            <section>
                <div id="buttons" style={{margin: '75px'}}
                     className="btn-toolbar d-flex justify-content-around position-relative" role={"toolbar"}>
                    <div className="btn-group" role={"group"}>
                        <Link id="button-seven-days"
                              className="btn btn-dark position-absolute top-50 start-0 translate-middle"
                              to="/weather/{mountain}/{location}/7">View 7-day forecast</Link>
                    </div>
                    <div className="btn-group" role="group">
                        <Link id="button-ten-days"
                              className="btn btn-dark position-absolute top-50 start-100 translate-middle"
                              to="/weather/{mountain}/{location}/10">
                            View complete 10-day forecast
                        </Link>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}