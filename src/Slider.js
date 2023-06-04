import { dataSlides } from "./data/dataSlides";
import arrowLeft from './assets/arrowLeft.png';
import arrowRight from './assets/arrowRight.png';
import { useState } from "react";

function Slider()  {
    const [slides, setSlides] = useState(0);
    const {title,description,image} = dataSlides[slides];

    const [show, setShow] = useState(false);

    const previousSlide = () => {
        setSlides((slides => {
            slides--;
            if(slides<0) {
                return dataSlides.length-1
            }
            return slides
        }))
    }

    const nextSlide = () => {
        setSlides((slides => {
            slides++;
            if(slides > dataSlides.length-1) {
                return slides = 0
            }
            return slides
        }))
    }

    const handleHighlight = (item) => {
        setSlides(item.id);
        item.show = !item.show;
        setShow(!show);

    }

    return (
        <div>
        <div className="wrapper">
            <div className="block1">
                <h1 className="headerSlide">Праздник в деталях</h1>
                <h2 className="titleSlide">{title}</h2>
                <p className="text">{description}</p>
            </div>
            <div className="block2">
                <img onClick={previousSlide} src={arrowLeft} width="40px" alt="arrow" className="arrow"/>
                <img src={image} alt="options" className="imageOptions"/>
                <img onClick={nextSlide} src={arrowRight} width="60px" alt="arrow" className="arrow"/>
            </div>
        </div>
        <div className="wrapper">
            {dataSlides.map((item => {
                 const {id,title,image,show} = item;
                 return (
                    <div onClick={() => handleHighlight(item)} key={id} className={show ? 'highlight' : 'wrapper2'}>
                          <img src={image} alt="options" className="imgLine"/>
                          <h2>{title}</h2>
                    </div>
                 )
            }))}
        </div>
        </div>
    )
}

export default Slider;