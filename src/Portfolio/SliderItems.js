import arrowLeft from '../assets/arrowLeft.png';
import arrowRight from '../assets/arrowRight.png';
import { useState } from "react";
import { dataSweets } from '../data/dataSweets';

function SliderItems({id}) {
    const [slides, setSlides] = useState(0);
    const list = dataSweets[id].slider;

    const image = list[slides];


    const previousSlide = () => {
        setSlides((slides => {
            slides--;
            if(slides<0) {
                return list.length-1
            }
            return slides
        }))
    }

    const nextSlide = () => {
        setSlides((slides => {
            slides++;
            if(slides > list.length-1) {
                return slides = 0
            }
            return slides
        }))
    }

    return (
        <div>
        <div className="wrapper10">
            <div className="block4">
                <img onClick={previousSlide} src={arrowLeft} width="30px" alt="arrow" className="arrow"/>
                <img src={image} alt="options" className="imageSlider"/>
                <img onClick={nextSlide} src={arrowRight} width="30px" alt="arrow" className="arrow"/>
            </div>
        </div> 
     
        </div>
    )
}

export default SliderItems;