import SliderItems from "./SliderItems";
import { dataMasterClasses } from '../data/dataMasterClasses';
import circle from '../assets/circle.png'; 

function DecorItem({id}) {
    return (
        <div className="modalPortal">
            <h2 className="headerDecorItem">{dataMasterClasses[id].title}</h2>
            <div className="decorContainer">
            <div className="sliderDecorCont">
            <SliderItems id={id}/>
            <div className="priceWrapper2">
                <span className="animatorPrice">{dataMasterClasses[id].price} ₽ / час</span>
                <button className="btnCTA">Получить расчет</button>
            </div>
            </div>
            <div className="decorInfo">
                <h3 className="titleSlide">{dataMasterClasses[id].header}</h3>
                <p className="text size position">{dataMasterClasses[id].description}</p>
                <h3 className="titleSlide">{dataMasterClasses[id].header2}</h3>
                {dataMasterClasses[id].program.map((item,index) => {
                    return (
                        <div key={index}>
                            <div className="listItem">
                        <img src={circle} alt="circle" className="circle2"/><li className="text  size">{item}</li>
                        </div>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}

export default DecorItem;