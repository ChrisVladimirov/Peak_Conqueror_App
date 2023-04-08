import {useBackground} from "../../hooks/useBackground.js";
import {pictureUrls} from "../../api/constants.js";
import {NavbarTemplate} from "./NavbarTemplate";
import {Footer} from "./Footer";
import styles from "./ErrorPage.module.css";

export const ErrorPage = (props) => {

    useBackground(pictureUrls.MIST)

    return (
        <>
            <NavbarTemplate/>
            <div className={`${styles.errorDiv} text-white fw-bold text-center`}>
                <h6>Oops, something went wrong!</h6>
                <p>Don't worry! Keep mountain-trekking!</p>
            </div>
            <Footer/>
        </>);
}