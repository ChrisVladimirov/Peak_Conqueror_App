import styles from "./PicturesPage.module.css";
import {usePictures} from "../../hooks/usePictures.js";
import {Suspense} from "react";
import {PictureCard} from "./PictureCard";
import {CreatePicturePage} from "./CreatePicturePage";
import {NavbarTemplate} from "../commonsDomain/NavbarTemplate";
import {Footer} from "../commonsDomain/Footer";
import {useBackground} from "../../hooks/useBackground";

export const PicturesPage = (props) => {

    const pictures = usePictures([]);

    useBackground("https://res.cloudinary.com/dhr071bhp/image/upload/v1672599096/peak-climber-pictures/PazarDere_rh0rfs.jpg")

    return (
        <>
            <NavbarTemplate/>
            <section className={`d-flex justify-content-center align-self-center ${styles.allPictures}`}>
                <h2 className="text-center text-white mt-5">All pictures</h2>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="card-group">
                        <div className="card">
                            {pictures.length > 0 ?
                                pictures.map(p =>
                                    <PictureCard key={p.id} pictureDTO={p}/>)
                                : <p>Loading Pictures...</p>
                            }
                        </div>
                    </div>
                </Suspense>
                <div>
                    <CreatePicturePage/>
                </div>
            </section>
            <Footer/>
        </>
    );
}