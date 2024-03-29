import {Link} from "react-router-dom";
import {Header} from "./Header";
import {Footer} from "./Footer";
import ImageControlledCarousel from "./ImageControlledCarousel";
import {useBackground} from "../../hooks/useBackground.js";
import styles from "./Home.module.css";

export const Home = (props) => {

    useBackground('none')

    return (
        <>
            <Header/>

            <section>
                <ImageControlledCarousel/>
            </section>

            <section className={`d-flex justify-content-around ${styles.homeSection}`}>
                <div className={`jumbotron ${styles.jumbotronHome}`}>
                    <h1 className="display-4">For the serious travellers!</h1>
                    <p className="lead">
                        View breathtaking amazing mountain routes.</p>
                    <hr className="my-4"/>
                    <p>PeakClimber helps you share your passion for the wild with your friends!</p>
                    <p className="lead">
                        <Link className="btn btn-success btn-lg"
                              to="/routes/all"
                              role="button">Learn more</Link>
                    </p>
                </div>
                <div className="jumbotron">
                    <h1 className="display-4">Hello, adventurer!</h1>
                    <p className="lead">
                        View the weather forecast on your favourite locations in the mountain.</p>
                    <hr className="my-4"/>
                    <p>Choose between 5, 7 or even 10-day forecast to plan your next adventure!</p>
                    <p className="lead">
                        <Link className="btn btn-primary btn-lg"
                              to="/weather/Rila/Kostenets/5"

                              role="button">Learn more</Link>
                    </p>
                </div>
            </section>

            <Footer/>
        </>
    );
}