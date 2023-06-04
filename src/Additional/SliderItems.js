import arrowBlackLeft from '../assets/arrowBlackLeft.png';
import arrowBlackRight from '../assets/arrowBlackRight.png';
import { useState } from "react";
import { dataAdditional } from '../data/dataAdditional';

function SliderItems({id}) {
    const [slides, setSlides] = useState(0);
    const list = dataAdditional[id].slider;

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
        <div className="wrapper">
            <div className="block2">
                <img onClick={previousSlide} src={arrowBlackLeft} width="30px" alt="arrow" className="arrow"/>
                <img src={image} alt="options" className="imageOptions"/>
                <img onClick={nextSlide} src={arrowBlackRight} width="30px" alt="arrow" className="arrow"/>
            </div>
        </div> 
     
        </div>
    )
}

export default SliderItems;