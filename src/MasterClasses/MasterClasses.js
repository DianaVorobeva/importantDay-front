import { useState } from "react";
import React from "react";
import { dataMasterClasses } from '../data/dataMasterClasses'
import MasterClassModal from "./MasterClassModal";
import MasterClassItem from "./MasterClassItem";

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

function Decorations({handleFormModal}) {
  
    const [itemId, setItemId] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = (id) => {
        setIsOpen(true);
        setItemId(id);
    }

    return (
        <div>
    
     <div>
        <div className="contBanner5">
            <div className="wrapper5">
            <h1>Оформление детских праздников шарами и декорациями</h1>
            <p>Иногда не достает всего пары деталей, чтобы погружение в атмосферу волшебства было наиболее полным. Наша команда готова помочь и приложить все усилия, чтобы граница между сказочным и реальным миром почти перестала существовать.</p>
            <button className="btnCTA">Оставить заявку</button> 
            </div>
        </div>
        <div className="wrapper6">
          
            <div className="wrapper8">
           
            {dataMasterClasses.map((item => {
                const {id,title,image} = item;
            
                    return (
                        <div onClick={() => handleModal(id)}  key={id} className="contMasterClass" style={{backgroundImage:`url(${image})`}}>
                            <p className="masterHeader">{title}</p>
                        </div>
                        ) 
               
                
               
            }))
            }
            </div>
        </div>
        </div>

        <MasterClassModal  open={isOpen} onClose={() => setIsOpen(false)}>
            <MasterClassItem id={itemId}/>
        </MasterClassModal>
        
        </div>
       
    )
}


export default Decorations;