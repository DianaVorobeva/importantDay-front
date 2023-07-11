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
                <h1 className="headerSlide">Из чего состоит «Важный день»?</h1>
                <h3 className="greeting">Давайте знакомиться!</h3>
                <h2 className="titleSlide">{title}</h2>
 
            </div>
            <div className="block2">
                <img onClick={previousSlide} src={arrowLeft} width="50px" alt="arrow" className="arrow"/>
                <img src={image} alt="options" className="imageOptions"/>
                <img onClick={nextSlide} src={arrowRight} width="70px" alt="arrow" className="arrow"/>
            </div>
        </div>
        <div className="wrapper">
            {dataSlides.map((item => {
                 const {id,title,image,show} = item;
                 return (
                    <div onClick={() => handleHighlight(item)} key={id} className={show ? 'highlight' : 'wrapper2'}>
                          <img src={image} alt="options" className="imgLine"/>
                          <h2 className="titleBottom">{title}</h2>
                    </div>
                 )
            }))}
        </div>
        
        <div className="waves waves--bottom waves--blue waves--big waves--anim">
		
		<svg width="3884" height="129" viewBox="0 0 3884 129" fill="#FFF" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path d="M3884 114.001V129L9.64582e-05 129L9.77696e-05 114C181.5 114 388.812 66.8065 575.135 48.6299C672.118 39.1976 762.047 24.3615 858.442 14.438C1019.79 -2.16661 1198.47 -4.52467 1364.51 7.75688C1557.6 22.1017 1734.22 55.6058 1933.18 59.3394C1936.12 59.3394 1939.06 59.4376 1942 59.4376C1944.94 59.4376 1947.88 59.3394 1950.82 59.3394C2149.78 55.6058 2326.4 22.1017 2519.49 7.75688C2685.53 -4.52467 2864.21 -2.16661 3025.56 14.438C3121.95 24.3615 3211.88 39.1976 3308.86 48.6299C3495.19 66.8065 3704 114.001 3884 114.001Z" />
		</svg>
		<svg width="3884" height="129" viewBox="0 0 3884 129" fill="#FFF" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path d="M3884 114.001V129L9.64582e-05 129L9.77696e-05 114C181.5 114 388.812 66.8065 575.135 48.6299C672.118 39.1976 762.047 24.3615 858.442 14.438C1019.79 -2.16661 1198.47 -4.52467 1364.51 7.75688C1557.6 22.1017 1734.22 55.6058 1933.18 59.3394C1936.12 59.3394 1939.06 59.4376 1942 59.4376C1944.94 59.4376 1947.88 59.3394 1950.82 59.3394C2149.78 55.6058 2326.4 22.1017 2519.49 7.75688C2685.53 -4.52467 2864.21 -2.16661 3025.56 14.438C3121.95 24.3615 3211.88 39.1976 3308.86 48.6299C3495.19 66.8065 3704 114.001 3884 114.001Z"  />
		</svg>
		<svg width="3884" height="129" viewBox="0 0 3884 129" fill="#FFF" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path d="M3884 114.001V129L9.64582e-05 129L9.77696e-05 114C181.5 114 388.812 66.8065 575.135 48.6299C672.118 39.1976 762.047 24.3615 858.442 14.438C1019.79 -2.16661 1198.47 -4.52467 1364.51 7.75688C1557.6 22.1017 1734.22 55.6058 1933.18 59.3394C1936.12 59.3394 1939.06 59.4376 1942 59.4376C1944.94 59.4376 1947.88 59.3394 1950.82 59.3394C2149.78 55.6058 2326.4 22.1017 2519.49 7.75688C2685.53 -4.52467 2864.21 -2.16661 3025.56 14.438C3121.95 24.3615 3211.88 39.1976 3308.86 48.6299C3495.19 66.8065 3704 114.001 3884 114.001Z"  />
		</svg>	</div>
           

        </div>
    )
}

export default Slider;