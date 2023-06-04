import SliderItems from "./SliderItems";
import { dataAdditional } from '../data/dataAdditional';
import circle from '../assets/circle.png'; 

function DecorItem({id}) {
    return (
        <div className="modalPortal">
            <h2 className="headerDecorItem">{dataAdditional[id].title}</h2>
            <div className="decorContainer">
            <div className="sliderDecorCont">
            <SliderItems id={id}/>
            <div className="priceWrapper2">
                <span className="animatorPrice">{dataAdditional[id].price} ₽ / час</span>
                <button className="btnCTA">Получить расчет</button>
            </div>
            </div>
            <div className="decorInfo">
                <h3 className="titleSlide">{dataAdditional[id].header}</h3>
                <p className="text size position">{dataAdditional[id].description}</p>
                <h3 className="titleSlide">{dataAdditional[id].header2}</h3>
                {dataAdditional[id].program.map((item,index) => {
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