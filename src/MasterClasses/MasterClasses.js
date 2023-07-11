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
            <div className="newWrapper3">
            <h1>Мастер-классы</h1>
            <p className="text">Мастер класс- это увлекательные занятия, которые развивают воображение, внимательность, мелкую моторику, сенсорику ребенка. Результат каждого мастер-класса — полноценная законченная работа, выполненная ребенком самостоятельно, но по под чутким руководством наших мастеров. </p>
            <button className="btnCTA" onClick={handleFormModal}>Оставить заявку</button> 
            </div>
        </div>
    
          
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

        <MasterClassModal  open={isOpen} onClose={() => setIsOpen(false)}>
            <MasterClassItem id={itemId} handleFormModal={handleFormModal}/>
        </MasterClassModal>
        
        </div>
       
    )
}


export default Decorations;