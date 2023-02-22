import {WeatherImage} from "./WeatherImage";
import {Link} from "react-router-dom";

export const ForecastDayDTO = (props) => {
    const dayDTO = props.dayDTO;

    return (
        <>
            <div className="card-group">
                <div className="card" style={{width: '18rem', backgroundColor: 'rgba(255, 248, 211, 0.4)'}}>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h5 className="card-title">{dayDTO.date_.weekday}</h5>
                                <h6 className="card-subtitle">{dayDTO.date_}</h6>
                                <div>
                                    {
                                        {
                                            'cloudy': <WeatherImage
                                                src="https://res.cloudinary.com/dhr071bhp/image/upload/v1672601794/peak-climber-pictures/weather-icons/cloudy_xw1y6k.png"
                                                alt="cloudy-weather-image"/>,
                                            'partly-cloudy-day': <WeatherImage
                                                src="https://res.cloudinary.com/dhr071bhp/image/upload/v1672601794/peak-climber-pictures/weather-icons/partsun_z8zhx1.png"
                                                alt="partly-cloudy-weather-image"/>,
                                            'clear-day': <WeatherImage
                                                src="https://res.cloudinary.com/dhr071bhp/image/upload/v1672601794/peak-climber-pictures/weather-icons/sun_lq779u.png"
                                                alt="clear-day-weather-image"/>,
                                            'rain': <WeatherImage
                                                src="https://res.cloudinary.com/dhr071bhp/image/upload/v1672601794/peak-climber-pictures/weather-icons/rain_nzaxx7.png"
                                                alt="rainy-weather-image"/>,
                                            'snow': <WeatherImage
                                                src="https://res.cloudinary.com/dhr071bhp/image/upload/v1672601794/peak-climber-pictures/weather-icons/snow_y4xxz0.png"
                                                alt="snowy-weather-image"/>,
                                            'wind': <WeatherImage
                                                src="https://res.cloudinary.com/dhr071bhp/image/upload/v1672601794/peak-climber-pictures/weather-icons/wind_ve43qb.png"
                                                alt="windy-weather-image"/>,
                                            'fog': <WeatherImage
                                                src="https://res.cloudinary.com/dhr071bhp/image/upload/v1672601794/peak-climber-pictures/weather-icons/fog_tfeh9b.png"
                                                alt="foggy-weather-image"/>
                                        }[dayDTO.iconName]
                                    }
                                </div>
                                <p className="card-text">
                                    {dayDTO.tempMin}° | {dayDTO.tempMax}°
                                </p>
                                <p className="card-text">{dayDTO.summary_}</p>
                                <span className="card-text">
                                <b>Wind speed: {dayDTO.windSpeed} m/s</b>
                            </span>
                            </li>
                            <li className="list-group-item">
                                <p className="card-text">&#x2614;{dayDTO.precipitationProb}%</p>
                                <p className="card-text">Humidity: {dayDTO.humidityPercentage}%</p>
                                <p className="card-text">&#x2601; {dayDTO.cloudCover}%</p>
                                <p className="card-text">Visibility: {dayDTO.visibilityPercentage}%</p>
                            </li>
                            <li className="list-group-item">
                                {dayDTO.snowPercentage > 0
                                    ? <p className="card-text">Snow cover: {dayDTO.snowPercentage} mm</p>
                                    : null
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}