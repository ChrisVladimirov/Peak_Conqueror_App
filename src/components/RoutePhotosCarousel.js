import {useState} from "react";
import Carousel from "react-bootstrap/Carousel";

export const RoutePhotosCarousel = ({pictures}) => {
    const [imgIndex, setImgIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setImgIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={imgIndex} onSelect={handleSelect}>
            {pictures.length > 0 ?
                pictures.map(p => {
                    // noinspection BadExpressionStatementJS
                    <Carousel.Item>
                        <img className="d-block w-50" src={p.url} alt={p.title}/>
                    </Carousel.Item>
                }) : null}
        </Carousel>
    );
}
