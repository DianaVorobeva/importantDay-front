
import { dataMasterClasses } from '../data/dataMasterClasses';


function MasterClassItem({id}) {
    return (
        <div className="modalPortal">
            <h2 className="headerDecorItem">{dataMasterClasses[id].title}</h2>
            <div className="decorContainer">
            <div className="sliderDecorCont">
            <img src={dataMasterClasses[id].image} alt="masterClass" className='imageDecorInner'/>
            
            </div>
            <div className="decorInfo">
                <p className="text size position">{dataMasterClasses[id].description}</p>
            </div>
            </div>
        </div>
    )
}

export default MasterClassItem;