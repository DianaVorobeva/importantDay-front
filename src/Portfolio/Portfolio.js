import { dataPortfolio } from '../data/dataPortfolio';
import { useState } from "react";
import React from "react";
import PortfolioModal from "./PortfolioModal";
import PortfolioItem from "./PortfolioItem";
import playWhite from '../assets/playWhite.png'

const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
  }
  
  const OTHER_CONTENT_STYLES = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px'
  }


function Portfolio({handleFormModal}) {

    const [itemId, setItemId] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = (id) => {
        setIsOpen(true);
        setItemId(id);
    }

    return (
        <div className="contPortfolio">
            <h1 className='position2'>Кейсы праздников</h1>
            <div className="wrapper8">
           
           {dataPortfolio.map((item => {
               const {id,title,image} = item;
               if(id===0) { 
                   return (
                       <div onClick={() => handleModal(id)} key={id} className="photoZone" style={{backgroundImage:`url(${image})`}}>
                           <img src={playWhite} alt="playWhite" className='playPortfolio1'/>
                           <p className="portfolioHeader1">{title}</p>
                       </div>
                       ) } 
               if (id>=3) {
                   return (
                       <div onClick={() => handleModal(id)}  key={id} className="cell bottomCell" style={{backgroundImage:`url(${image})`}}>
                           <p className="portfolioHeader2">{title}</p>
                           <img src={playWhite} alt="playWhite" className='playPortfolio2'/>
                       </div>
                       ) 
               }
                   else { 
                       return (
                           <div onClick={() => handleModal(id)}  key={id} className="cell " style={{backgroundImage:`url(${image})`}}>
                               <p className="portfolioHeader2">{title}</p>
                               <img src={playWhite} alt="playWhite" className='playPortfolio2'/>
                           </div>
                        ) }
               
              
           }))
           }
           </div>

        <PortfolioModal  open={isOpen} onClose={() => setIsOpen(false)}>
            <PortfolioItem id={itemId}/>
        </PortfolioModal>
        </div>
    )
}

export default Portfolio;