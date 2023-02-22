export const WeatherImage = ({src, alt}) => {
    return (
        <img className="card-img"
             src={`${src}`}
             alt={`${alt}`}/>
    );
}