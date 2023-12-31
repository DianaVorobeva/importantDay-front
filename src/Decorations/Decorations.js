import { useState } from "react";
import React from "react";
import { dataDecorations } from '../data/dataDecorations'
import DecorModal from "./DecorModal";
import DecorItem from "./DecorItem";

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
        <div className="contBanner4">
            <div className="newWrapper2">
            <h1>Оформление детских праздников шарами и декорациями</h1>
            <button className="btnCTA" onClick={handleFormModal}>Оставить заявку</button> 
            </div>
        </div>
        <div className="wrapper6">
          
            <div className="wrapper8">
           
            {dataDecorations.map((item => {
                const {id,title,image} = item;
                if(id===0) { 
                    return (
                        <div onClick={() => handleModal(id)} key={id} className="photoZone" style={{backgroundImage:`url(${image})`}}>
                            <p className="decorHeader1">{title}</p>
                        </div>
                        ) } else { 
                        return (
                            <div onClick={() => handleModal(id)}  key={id} className="cell" style={{backgroundImage:`url(${image})`}}>
                                <p className="decorHeader2">{title}</p>
                            </div>
                         ) }
                
               
            }))
            }
            </div>
        </div>
        </div>

        <DecorModal  open={isOpen} onClose={() => setIsOpen(false)}>
            <DecorItem id={itemId} handleFormModal={handleFormModal}/>
        </DecorModal>
        
        </div>
       
    )
}


export default Decorations;