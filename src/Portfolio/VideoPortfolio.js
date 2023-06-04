import playWhite from '../assets/playWhite.png'
import React,{useState} from 'react';
import ModalVideo from 'next-modal-video';
import '../modal-video.min.css';
import { dataPortfolio } from '../data/dataPortfolio';

function VideoPortfolio({id})  {

    const [isOpen, setOpen] = useState(false);

    return (
    <div className="">
    <React.Fragment>
        <ModalVideo
        channel='youtube'  
        autoplay 
        isOpen={isOpen} 
        videoId="slMub4NtrSk" 
        onClose={() => setOpen(false)}
        />
        <div onClick={()=> setOpen(true)}>
        <img src={dataPortfolio[id].image} alt="portfolio" className='imageVideo'/>
        <img src={playWhite} alt="playWhite" className='playWhite'/>
        </div>

    </React.Fragment>
    </div>
    )
}

export default VideoPortfolio;