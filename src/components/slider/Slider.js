import { useState } from "react"
import arrow from "../../assets/sliderarrow.svg"
import './slider.css';
const Slider = ({tabimages}) => {

    // * la variable tabimages c'est une liste d'images
    
    const [slideIndex, setSlideIndex] = useState(0)
    const nextSlide = () => {
        if (slideIndex !== (tabimages.length - 1)) {
            setSlideIndex(slideIndex + 1)
        }
        else {
            setSlideIndex(0)
        }
    }
    const previousSlide = () => {
        if (slideIndex !== 0) {
            setSlideIndex(slideIndex - 1)
        }
        else {
            setSlideIndex(tabimages.length - 1)
        }
    }
    return (
        <div className="slider">
            <div className="slider__content">
                <img src={tabimages[slideIndex]} alt="Images appartement" />
            </div>
            <div className="slider__count">
                    {slideIndex + 1}/{tabimages.length}
            </div>
            {tabimages.length  > 1  && <button className="slider__arrow slider__arrow--left" onClick={previousSlide}>
                <img src={arrow} alt="flèche vers la gauche" />
            </button>}
            {tabimages.length  > 1  && <button className="slider__arrow slider__arrow--right" onClick={nextSlide}>
                <img src={arrow} alt="flèche vers la droite" />
            </button>}
        </div>
    )
}

export default Slider