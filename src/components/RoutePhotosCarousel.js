import {useState} from "react";
import Carousel from "react-bootstrap/Carousel";

export const RoutePhotosCarousel = ({pictures}) => {
    const [imgIndex, setImgIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setImgIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={imgIndex} onSelect={handleSelect}>
            {pictures?.length > 0 ?
                pictures?.map(p => {
                    return <Carousel.Item>
                        <img className="d-block w-100" key={p.id} src={p.url} alt={p.title}/>
                    </Carousel.Item>
                }) : null}
        </Carousel>
    );
}
