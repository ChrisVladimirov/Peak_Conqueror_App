import {useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import {pictureUrls} from "../../api/constants.js";

function ImageControlledCarousel() {
    const [imgIndex, setImgIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setImgIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={imgIndex} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pictureUrls.LAKE}
                    alt="A mountain creek"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pictureUrls.MIST}
                    alt="Mist near Malyovitsa"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pictureUrls.SKAKAVITSA}
                    alt="Skakavitsa waterfall"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageControlledCarousel;