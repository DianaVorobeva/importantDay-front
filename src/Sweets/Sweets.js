import { useState } from "react";
import React from "react";
import { dataSweets} from '../data/dataSweets'
import SweetsModal from "./SweetsModal";
import SweetsItem from "./SweetsItem";

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

function Sweets({handleFormModal}) {
  
    const [itemId, setItemId] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = (id) => {
        setIsOpen(true);
        setItemId(id);
    }

    return (
        <div>
    
     <div>
        <div className="contBanner6">
            <div className="wrapper5">
            <h1>Угощения</h1>
            <button className="btnCTA" onClick={handleFormModal}>Оставить заявку</button> 
            </div>
        </div>
        <div className="wrapper6">
          
            <div className="wrapper8">
           
            {dataSweets.map((item => {
                const {id,title,image} = item;
                if(id===0) { 
                    return (
                        <div onClick={() => handleModal(id)} key={id} className="photoZone" style={{backgroundImage:`url(${image})`}}>
                            <p className="decorHeader1">{title}</p>
                        </div>
                        ) } 
                if (id>=3) {
                    return (
                        <div key={id} className="cell bottomCell" style={{backgroundImage:`url(${image})`}}>
                            <p className="decorHeader4">{title}</p>
                        </div>
                        ) 
                }
                    else { 
                        return (
                            <div key={id} className="cell " style={{backgroundImage:`url(${image})`}}>
                                <p className="decorHeader3">{title}</p>
                            </div>
                         ) }
                
               
            }))
            }
            </div>
        </div>
        </div>

        <SweetsModal  open={isOpen} onClose={() => setIsOpen(false)}>
            <SweetsItem id={itemId} handleFormModal={handleFormModal}/>
        </SweetsModal>
        
        </div>
       
    )
}

export default Sweets;