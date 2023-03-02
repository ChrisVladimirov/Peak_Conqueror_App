import {getAllRoutes} from "../services/routeService";
import {useEffect, useState, Suspense} from "react";
import {MountainRouteCard} from "./MountainRouteCard";

export const MountainRoutes = (props) => {

    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            getAllRoutes().then(r => {
                setRoutes(r);
            });
        }, 1000)
    }, []);

    useEffect(() => {
        const currentStyles = document.body.style;
        currentStyles.backgroundImage = `url("https://res.cloudinary.com/dhr071bhp/image/upload/v1672599096/peak-climber-pictures/PazarDere_rh0rfs.jpg")`;
        currentStyles.backgroundPosition = `center center`;
        currentStyles.backgroundRepeat = `no-repeat`;
        currentStyles.backgroundAttachment = `fixed`;
        currentStyles.backgroundSize = `cover`;
    }, [])

    // noinspection JSValidateTypes
    return (
        <div>
            <div className="headingTeaser mt-5">
                <h4>Have you been there?</h4>
                <h5>...if not, what are you waiting for!?</h5>
            </div>

            <section className="d-flex justify-content-center align-self-center">
                <Suspense fallback={<p>Loading...</p>}>
                    {routes.length > 0 ?
                        routes.map(route => <MountainRouteCard key={route.id} routeDTO={route}/>)
                        : <p>No routes yet :(</p>
                    }
                </Suspense>
            </section>
        </div>
    );
}