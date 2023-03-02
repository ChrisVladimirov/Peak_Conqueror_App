import {Link} from "react-router-dom";

export const MountainRouteCard = (props) => {

    const routeDTO = props.routeDTO;

    return (
        <div className="card col-sm-6 col-md-4 col-lg-3 m-1 p-0">
            <div className="card-body">
                <h3 className="card-title">{routeDTO.name}</h3>
                {routeDTO.pictures.length > 0 ?
                    <img className="card-img"
                         src={routeDTO.pictures[0].url} alt={routeDTO.pictures[0].title}/>
                    : null
                }
                <h4 className="card-text">{routeDTO.toughnessLevel.toughness}</h4>
                <h4 className="card-text">Duration: {routeDTO.duration}h</h4>
                <h5 className="card-text">{routeDTO.itinerary}</h5>
                {!!routeDTO.coordinates ?
                    <p>routeDTO.coordinates</p>
                    : null
                }
                <span className="card-body">
                    <Link to={`/routes/${routeDTO.id}`}>View Route</Link>
                </span>
            </div>
        </div>
    );
}