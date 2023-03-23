import {Link} from "react-router-dom";

export const ForecastLocation = ({place, setters}) => {

    const [setMountain, setMountain_Location, setNumberOfDays] = setters;

    function linkClickedHandler(e) {
        setMountain(place.mountainName);
        setMountain_Location(place.locationName);
        setNumberOfDays(5);
    }

    return (
        <>
            <li>
                <Link onClick={linkClickedHandler} className="dropdown-item"
                    to={`/weather/${place.mountainName}/${place.locationName}/5`}>
                      <span>
                          {place.locationBeautifulName}
                      </span>
                </Link>
            </li>
        </>
    );
}