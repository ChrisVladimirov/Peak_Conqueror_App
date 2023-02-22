export const ForecastDayDTO = (/*{
                                   date_, tempMax, tempMin, humidityPercentage,
                                   snowPercentage, windSpeed, cloudCover,
                                   visibilityPercentage, precipitationProb, summary_, iconName}*/props) => {
    return (
        <div>
            <h3>{props.dayDTO}</h3>
        </div>
    );
}

//{"date_":"2023-02-21","tempMax":19.9,
// "tempMin":1.9,
// "humidityPercentage":45.9,"snowPercentage":0.0,
// "windSpeed":24.6,"cloudCover":47.9,"visibilityPercentage":13.5,
// "precipitationProb":0.0,
// "summary_":"Partly cloudy throughout the day.",
// "iconName":"partly-cloudy-day"}