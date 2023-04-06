import {getAllRoutes} from "../../services/routeService.js";
import {useEffect, useState, Suspense} from "react";
import {MountainRouteCard} from "./MountainRouteCard";
import {NavbarTemplate} from "../commonsDomain/NavbarTemplate";
import {Footer} from "../commonsDomain/Footer";
import {useBackground} from "../../hooks/useBackground.js";
import styles from "./MountainRoutes.module.css";
import {LikesProvider} from "../../contexts/LikesContext";
import {pictureUrls} from "../../api/constants.js";

export const MountainRoutes = (props) => {

    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        getAllRoutes().then(r => {
            setRoutes(r);
        });
    }, []);

    useBackground(pictureUrls.PAZAR_DERE)

    return (
        <div>
            <NavbarTemplate/>
            <div className={`${styles.headingTeaser} mt-5`}>
                <h4>Have you been there?</h4>
                <h5>...if not, what are you waiting for!?</h5>
            </div>

            <section className="d-flex justify-content-center align-self-center flex-wrap">
                <Suspense fallback={<p>Loading...</p>}>
                    {routes.length > 0 ?
                        routes.map((route, index) =>
                            <LikesProvider routeId={route.id} key={route.id}>
                                <MountainRouteCard
                                                   routeIndex={index} setRoutes={setRoutes} routeDTO={route}/>
                            </LikesProvider>
                        )
                        : <p className="justify-content-center">Loading routes...</p>
                    }
                </Suspense>
            </section>
            <Footer/>
        </div>
    )
}