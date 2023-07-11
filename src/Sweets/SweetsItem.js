import SliderItems from "./SliderItems";
import { dataSweets } from '../data/dataSweets';
import circle from '../assets/circle.png'; 

function SweetsItem({id,handleFormModal}) {
    return (
        <div className="modalPortal">
            <h2 className="headerDecorItem">{dataSweets[id].title}</h2>
            <div className="decorContainer">
            <div className="sliderDecorCont">
            <SliderItems id={id}/>
            <div className="priceWrapper2">
            <span className="animatorPrice">Напишите нам сейчас!</span>
                <button className="btnCTA" onClick={handleFormModal}>Получить расчет</button>
            </div>
            </div>
            
            </div>
        </div>
    )
}

export default SweetsItem;