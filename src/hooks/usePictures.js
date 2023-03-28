import {useEffect, useState} from "react";
import {getAllPictures} from "../services/pictureService.js";

/**
 * A custom hook to return the pictures collection
 * @param props (optional)
 * @returns pictures as an array
 */
export const usePictures = (props) => {
    const [pictures, setPictures] = useState(props || []);

    useEffect(() => {
        const gettingThePictures = async () => {
            let r = await getAllPictures()
            setPictures(r)
        };
        gettingThePictures();
    }, []);

    return pictures;
}