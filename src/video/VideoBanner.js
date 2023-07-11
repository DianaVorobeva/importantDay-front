import play from '../assets/play.png';
import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from 'next-modal-video';
import '../modal-video.min.css';

function VideoBanner({handleFormModal})  {

    const [isOpen, setOpen] = useState(false);

    return (
    <div className="videoBlock">
    <React.Fragment>
        <ModalVideo
        channel='youtube'  
        autoplay 
        isOpen={isOpen} 
        videoId="NtW1cbgImCk" 
        onClose={() => setOpen(false)}
        />
        <h1 className='headerVideo'>Узнайте больше о нашем подходе!</h1>
        <p className='textVideo'>Нажмите на значок видео, чтобы заглянуть за кулисы праздника!</p>
        <button className="btn-primary" onClick={()=> setOpen(true)}> <img  src={play} alt="play" className="playImg"/></button>
        <button className="btnCTA" onClick={handleFormModal}>Вызвать волшебников</button>
    </React.Fragment>
    </div>
    )
}

export default VideoBanner;