import {WeatherImage} from "./WeatherImage";

export const ForecastDayDTO = (props) => {
    const dayDTO = props.dayDTO;

    let date = dayDTO.date_;
    let dateAsNumber = new Date((date));

    let dayOfWeek = dateAsNumber.toLocaleString('default', {weekday: 'long'});

    return (
        <>
            <div className="card-group " style={{
                minWidth: '6em', minHeight: '8em',
                maxWidth: '15em', maxHeight: '38em'
            }}>
                <div className="card" style={{width: '18vw', backgroundColor: 'rgba(255, 248, 211, 0.4)'}}>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h5 className="card-title"
                                    style={dayOfWeek === 'Wednesday'
                                        ? {fontSize: '0.8em'}
                                        : {fontSize: '1em'}}>{dayOfWeek}</h5>
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
                                <p className="card-text" style={{fontSize: '0.8em', fontWeight: 'bold'}}>
                                    {dayDTO.tempMin.toFixed(1)}° | {dayDTO.tempMax.toFixed(1)}°
                                </p>
                                <p id="weather-summary" className="card-text">
                                    {props.numberDays <= 5 ?
                                        dayDTO.summary_
                                        : null}
                                </p>
                                <span className="card-text">
                                <b><i className="fa-solid fa-wind"></i>
                                    {dayDTO.windSpeed.toFixed(1)} m/s</b>
                            </span>
                            </li>
                            <li className="list-group-item">
                                <p className="card-text"><b
                                    style={{fontSize: '1.2em'}}>&#x2602;</b> {dayDTO.precipitationProb.toFixed(1)}%</p>
                                <p className="card-text">Humidity: {dayDTO.humidityPercentage.toFixed(1)}%</p>
                                <p className="card-text">&#x2601; {dayDTO.cloudCover.toFixed(1)}%</p>
                                <p className="card-text">Visibility: {dayDTO.visibilityPercentage.toFixed(1)}%</p>
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