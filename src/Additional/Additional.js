import { useState } from "react";
import React from "react";
import { dataAdditional } from '../data/dataAdditional'
import AdditionalModal from "./AdditionalModal";
import AdditionalItem from "./AdditionalItem";

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

function Additional({handleFormModal}) {
  
    const [itemId, setItemId] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = (id) => {
        setIsOpen(true);
        setItemId(id);
    }

    return (
        <div>
    
     <div>
        <div className="contBanner7">
            <div className="wrapper5">
            <h1>Услуги</h1>
            <p>Иногда не получается предусмотреть все, чтобы праздник получился таким, каким мы его и загадывали. Хорошо, что мы, как никто другой, понимаем это и спешим к вам на помощь: запоминать моменты или устраивать сюрпризы.</p>
            <button className="btnCTA">Оставить заявку</button> 
            </div>
        </div>
        <div className="wrapper6">
          
            <div className="wrapper8">
           
            {dataAdditional.map((item => {
                const {id,title,image} = item;
                
                        return (
                            <div onClick={() => handleModal(id)}  key={id} className="contMasterClass " style={{backgroundImage:`url(${image})`}}>
                                <p className="masterHeader">{title}</p>
                            </div>
                         ) 
                
               
            }))
            }
            </div>
        </div>
        </div>

        <AdditionalModal  open={isOpen} onClose={() => setIsOpen(false)}>
            <AdditionalItem id={itemId}/>
        </AdditionalModal>
        
        </div>
       
    )
}


export default Additional;