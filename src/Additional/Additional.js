import { dataAdditional } from '../data/dataAdditional'

function Additional({handleFormModal}) {
  
    return (
        <div>
    
     <div>
        <div className="contBanner7">
            <div className="newWrapper">
            <h1 className='additionalHeader'>Дополнительные услуги</h1>
            <button className="btnCTA" onClick={handleFormModal}>Оставить заявку</button> 
            </div>
        </div>
  
          
            <div className="wrapper8">
           
            {dataAdditional.map((item => {
                const {id,title,image} = item;
                
                        return (
                            <div key={id} className="contMasterClass " style={{backgroundImage:`url(${image})`}}>
                                <p className="masterHeader">{title}</p>
                            </div>
                         ) 
                
               
            }))
            }
            </div>
        </div>

        
        </div>
       
    )
}


export default Additional;