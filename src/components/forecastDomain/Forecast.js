import {useEffect, Suspense, useState} from "react";
import {ForecastDayDTO} from "./ForecastDayDTO";
import {NavbarTemplate} from "../commonsDomain/NavbarTemplate";
import {getAllForecastLocationNames, getWeatherForLocation} from "../../services/forecastService.js";
import {Footer} from "../commonsDomain/Footer";
import {Link} from "react-router-dom";
import {ForecastLocation} from "./ForecastLocation";
import {useBackground} from "../../hooks/useBackground.js";
import {pictureUrls} from "../../api/constants.js";
import styles from "./Forecast.module.css";

export const Forecast = (props) => {

    const [weatherData, setWeatherData] = useState([]);

    const [mountain, setMountain] = useState(props.match.params.mountain);
    const [mountain_location, setMountain_Location] = useState(props.match.params.mountain_location);
    const [numberOfDays, setNumberOfDays] = useState(props.match.params.numberOfDays);

    const [allLocations, setAllLocations] = useState([]);

    function forecastButtonsHandler(e, days) {
        setNumberOfDays(days);
        getWeatherForLocation(mountain, mountain_location, numberOfDays).then(result => setWeatherData(result));
        props.history.push(`/weather/${mountain}/${mountain_location}/${days}`)
    }

    useEffect(() => {
        getAllForecastLocationNames().then(result => setAllLocations(result));
    }, [])

    useEffect(() => {
        getWeatherForLocation(mountain, mountain_location, numberOfDays)
            .then(result => {
                setWeatherData(result);
            })
    }, [mountain_location, numberOfDays]);

    useBackground(pictureUrls.PINK_CLOUDS)

    let forecast = Array.from(weatherData)

    let currentForecastLocation = null
    if (allLocations) {
        currentForecastLocation = allLocations
            .find(l => l['locationName'] === mountain_location);
    }

    return (
        <div>
            <NavbarTemplate/>
            <h3 className={styles.welcomingHeader}>What will the weather be like on...?</h3>

            <section className={`d-flex justify-content-center align-self-center`}>
                <div className={`dropdown ${styles.forecastLocationsDropdown}`}>
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                       data-bs-toggle="dropdown" aria-expanded="false">View the weather on...
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        {allLocations.map((currentPlace, id) =>
                            <ForecastLocation key={id} setters={[setMountain, setMountain_Location, setNumberOfDays]}
                                              place={currentPlace}/>)}
                    </ul>
                </div>
            </section>

            {!!currentForecastLocation ?
                <div className={`${styles.currentForecastLocation}
                mx-auto d-flex flex-column align-self-center justify-content-center col-lg-4`}>
                    <h3>{currentForecastLocation['locationBeautifulName']}</h3>
                </div>
                : null
            }

            <section className={`d-flex ${styles.forecastDaysContainer}`}>
                <Suspense fallback={<p>Loading...</p>}>
                    {forecast.length > 0
                        ? forecast.map(day => <ForecastDayDTO numberDays={numberOfDays} key={day.date_} dayDTO={day}/>)
                        : <p style={{fontSize: '2em'}}>Loading...</p>
                    }
                </Suspense>
            </section>
            <section>
                <div className={`btn-toolbar d-flex justify-content-around 
                     position-relative ${styles.forecastButtons}`} role={"toolbar"}>
                    <div className="btn-group" role={"group"} onClick={(e) => forecastButtonsHandler(e, 7)}>
                        <Link id="button-seven-days"
                              className="btn btn-dark position-absolute top-50 start-0 translate-middle"
                              to="#">View 7-day forecast</Link>
                    </div>
                    <div className="btn-group" role="group" onClick={(e) => forecastButtonsHandler(e, 10)}>
                        <Link id="button-ten-days"
                              className="btn btn-dark position-absolute top-50 start-100 translate-middle"
                              to="#">
                            View complete 10-day forecast
                        </Link>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}