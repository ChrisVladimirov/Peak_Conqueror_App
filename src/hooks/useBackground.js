import {useEffect} from "react";

export const useBackground = (imageUrl) => {
    useEffect(() => {
        const currentStyles = document.body.style;
        currentStyles.backgroundImage = `url("${imageUrl}")`;
        currentStyles.backgroundPosition = `center center`;
        currentStyles.backgroundRepeat = `no-repeat`;
        currentStyles.backgroundAttachment = `fixed`;
        currentStyles.backgroundSize = `cover`;
    }, [])

}