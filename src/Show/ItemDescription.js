import { dataShow } from '../data/dataShow';
import circle from '../assets/circle.png'; 

function ItemDescription({id,handleFormModal}) {

    return (
        <div>

        <div className="contBanner2" style={{backgroundImage: `url(${dataShow[id].image1})`}}>
            <div className="wrapperBanner">
            <h1>{dataShow[id].title}</h1>
            <div className="ageTime">
            <p className="par">{dataShow[id].age}</p>
            <p className="par">{dataShow[id].time}</p>
            <p className="par">{dataShow[id].quantity}</p>
            </div>
            <button className="btnCTA" onClick={handleFormModal}>Оставить заявку</button> 
            </div>
        </div>
        <div className="wrapper6">
            <p className="text wrapText">{dataShow[id].description}</p>
        </div>
        </div>
    )
}

export default ItemDescription;