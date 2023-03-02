import {useEffect, useState} from "react";
import {getLikesForRoute, getParticularRoute, likeARoute} from "../services/routeService.js";
import {getUserData, isAdmin} from "../api/util";
import ImageControlledCarousel from "./ImageControlledCarousel";
import {Footer} from "./Footer";
import {NavbarTemplate} from "./NavbarTemplate";
import {RoutePhotosCarousel} from "./RoutePhotosCarousel";

export const RouteDetails = (props) => {

    let routeId = props.match.params.id;

    const [currentRoute, setCurrentRoute] = useState(null);
    const [likes, setLikes] = useState(0);
    const [isItLiked, setIsItLiked] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            getParticularRoute(routeId).then(d => setCurrentRoute(d))
        }, 1000)
    }, []);

    useEffect(() => {
        setTimeout(() => {
            getLikesForRoute(routeId).then(r => setLikes(r));
        }, 1000)
    }, []);

    async function likeClickHandler(e) {
        e.preventDefault();
        await likeARoute(routeId);
        setIsItLiked(true);
    }

    const pictures = Object.values(currentRoute?.pictures);

    return (
        <>
            <NavbarTemplate/>
            <div className="wrapper">

                <h4>{currentRoute?.name}</h4>

                <aside className="route-aside">
                    <section id="routeBriefInfo">
                        <div className="section-left">
                            <div className="container">
                                <table className="table text-center">
                                    <thead className="table-dark">
                                    <tr>
                                        <th colSpan="2">Route name:
                                            {currentRoute?.name}
                                        </th>
                                    </tr>
                                    </thead>
                                    <tr>
                                        <td><i className="fa-regular fa-hourglass"></i></td>
                                        <td>Duration:
                                            {currentRoute?.duration}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {
                                                {
                                                    'EASY': <i className="fas fa-hiking"
                                                               style={{color: 'lightgreen'}}></i>,
                                                    'MODERATE': <i className="fas fa-hiking"
                                                                   style={{color: 'darkgreen'}}></i>,
                                                    'AVERAGE': <i className="fas fa-hiking"
                                                                  style={{color: 'blue'}}></i>,
                                                    'DIFFICULT': <i className="fas fa-hiking"
                                                                    style={{color: 'yellow'}}></i>,
                                                    'ALPINE': <i className="fas fa-hiking"
                                                                 style={{color: 'orange'}}></i>,
                                                    'CHALLENGING_ALPINE': <i className="fas fa-hiking"
                                                                             style={{color: 'red'}}></i>
                                                }[currentRoute?.toughnessLevel.level]
                                            }
                                        </td>
                                        <td>Difficulty:
                                            {currentRoute?.toughnessLevel.level}
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </section>

                    <section id="visualisation">
                        <div>
                            <div className="container justify-content-center">
                                <h3 className="text-warning text-center">View Route on Map</h3>
                                <div className="justify-content-center" id="map"></div>
                            </div>
                        </div>
                    </section>

                </aside>

                <main>
                    <section id="routeDescription">
                        <h3>About the Route</h3>
                        <p>{currentRoute?.itinerary}"></p>
                    </section>
                    <aside>
                        {!isItLiked
                            ? <a className="btn btn-dark" onClick={likeClickHandler}>Like</a>
                            : null
                        }
                        {isAdmin()
                            ? <div>{likes}</div>
                            : null
                        }
                    </aside>
                    <section id="routeGallery">
                        <RoutePhotosCarousel pictures={pictures}/>
                    </section>
                </main>
            </div>

            <Footer/>
        </>
    );
}