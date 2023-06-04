import SliderItems from "./SliderItems";
import { dataSweets } from '../data/dataSweets';
import circle from '../assets/circle.png'; 

function SweetsItem({id}) {
    return (
        <div className="modalPortal">
            <h2 className="headerDecorItem">{dataSweets[id].title}</h2>
            <div className="decorContainer">
            <div className="sliderDecorCont">
            <SliderItems id={id}/>
            <div className="priceWrapper2">
                <span className="animatorPrice">{dataSweets[id].price} ₽ / час</span>
                <button className="btnCTA">Получить расчет</button>
            </div>
            </div>
            <div className="decorInfo">
                <h3 className="titleSlide">{dataSweets[id].header}</h3>
                <p className="text size position">{dataSweets[id].description}</p>
                <h3 className="titleSlide">{dataSweets[id].header2}</h3>
                {dataSweets[id].program.map((item,index) => {
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

export default SweetsItem;