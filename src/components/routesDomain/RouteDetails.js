import {useEffect, useState} from "react";
import {getParticularRoute} from "../../services/routeService.js";
import {Footer} from "../commonsDomain/Footer";
import {NavbarTemplate} from "../commonsDomain/NavbarTemplate";
import {RoutePhotosCarousel} from "./RoutePhotosCarousel";
import styles from "./RouteDetails.module.css";
import {useBackground} from "../../hooks/useBackground";
import {pictureUrls} from "../../api/constants";

export const RouteDetails = (props) => {

    let routeId = props.match.params.id;

    const [currentRoute, setCurrentRoute] = useState(null);
    const [pictures, setPictures] = useState([]);

    useBackground(pictureUrls.PAZAR_DERE)

    useEffect(() => {
        let someFunc = async () => {
            let response = await getParticularRoute(routeId);
            setCurrentRoute(response);
        }
        someFunc();
    }, []);

    useEffect(() => {
        setPictures(currentRoute?.pictures)
    }, [currentRoute])

    return (
        <>
            <NavbarTemplate/>
            {currentRoute != null ?
                <div className="wrapper">
                    <h2 className="mbr-section-title align-left mbr-fonts-style pb-3 mbr-light display-2">
                        {currentRoute.name}
                    </h2>

                    <aside className={styles.routeAside}>
                        <section id="routeBriefInfo" className={styles.routeBriefInfo}>
                            <div className="section-left">
                                <div className="container">
                                    <table className="table text-center">
                                        <thead className="table-dark">
                                        <tr>
                                            <th colSpan="2">Route name: {currentRoute.name}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><i className="fa-regular fa-hourglass"></i></td>
                                            <td>Duration: {currentRoute.duration}h</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {
                                                    {
                                                        'EASY': <i className={`fas fa-hiking ${styles.iconBackground}`}
                                                                   style={{color: 'lightgreen'}}></i>,
                                                        'MODERATE': <i className={`fas fa-hiking ${styles.iconBackground}`}
                                                                       style={{color: 'darkgreen'}}></i>,
                                                        'AVERAGE': <i className={`fas fa-hiking ${styles.iconBackground}`}
                                                                      style={{color: 'blue'}}></i>,
                                                        'DIFFICULT': <i className={`fas fa-hiking ${styles.iconBackground}`}
                                                                        style={{color: 'yellow'}}></i>,
                                                        'ALPINE': <i className={`fas fa-hiking ${styles.iconBackground}`}
                                                                     style={{color: 'orange'}}></i>,
                                                        'CHALLENGING_ALPINE': <i className={`fas fa-hiking ${styles.iconBackground}`}
                                                                                 style={{color: 'red'}}></i>
                                                    }[currentRoute.toughnessLevel.toughness]
                                                }
                                            </td>
                                            <td>Level: {(currentRoute.toughnessLevel.toughness)
                                                .replaceAll('_', ' ')}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {currentRoute.coordinates === null
                            ? null : <section id="visualisation">
                                <div>
                                    <div className="container justify-content-center">
                                        <h3 className="text-warning text-center">View Route on Map</h3>
                                        <div className="justify-content-center" id="map"></div>
                                    </div>
                                </div>
                            </section>
                        }

                    </aside>

                    <main>
                        <section className={styles.routeDescription}>
                            <h3>About the Route</h3>
                            <p className={styles.itineraryStyle}>{currentRoute.itinerary}</p>
                        </section>
                        <section className={styles.routeGallery}>
                            <RoutePhotosCarousel pictures={pictures}/>
                        </section>
                    </main>
                </div>
                : <h5 className={styles.loadingMessage}>Loading route details...</h5>}
            <Footer/>
        </>
    );
}