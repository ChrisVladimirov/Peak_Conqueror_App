import styles from "./PicturesPage.module.css";
import {usePictures} from "../../hooks/usePictures.js";
import {Suspense} from "react";
import {PictureCard} from "./PictureCard";
import {NavbarTemplate} from "../commonsDomain/NavbarTemplate";
import {Footer} from "../commonsDomain/Footer";
import {useBackground} from "../../hooks/useBackground.js";
import {pictureUrls} from "../../api/constants.js";

export const PicturesPage = (props) => {

    const [pictures, setPictures] = usePictures([]);

    useBackground(pictureUrls.PAZAR_DERE)

    return (
        <>
            <NavbarTemplate/>
            <section className={`d-flex justify-content-center align-self-center ${styles.allPictures}`}>
                <h2 className="text-center text-white mt-5">All pictures</h2>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className='d-flex justify-content-center align-self-center flex-wrap'>
                        {pictures.length > 0 ?
                            pictures.map((p, index) =>
                                <PictureCard key={p.id} pictureIndex={index}
                                             setPictures={setPictures} pictureDTO={p}/>)
                            : <p>Loading Pictures...</p>
                        }
                    </div>
                </Suspense>
            </section>
            <Footer/>
        </>
    );
}