import {useState} from "react";
import Carousel from "react-bootstrap/Carousel";

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
                    src="https://res.cloudinary.com/dhr071bhp/image/upload/v1672599088/peak-climber-pictures/lake_kzbf4l.jpg"
                    alt="A mountain creek"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dhr071bhp/image/upload/v1672599624/peak-climber-pictures/mist_rh7e7k.jpg"
                    alt="Mist near Malyovitsa"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dhr071bhp/image/upload/v1672598890/peak-climber-pictures/skakavitsa-waterfall_qenjfc.jpg"
                    alt="Skakavitsa waterfall"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageControlledCarousel;