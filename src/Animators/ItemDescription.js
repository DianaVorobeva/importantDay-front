import { dataAnimators } from "../data/dataAnimators";
import circle from '../assets/circle.png'; 

function ItemDescription({id}) {

    return (
        <div>

        <div className="contBanner2" style={{backgroundImage: `url(${dataAnimators[id].image2})`}}>
            <div className="wrapperBanner">
            <h1>{dataAnimators[id].title}</h1>
            <div className="ageTime">
            <p className="par">{dataAnimators[id].age}</p>
            <p className="par">{dataAnimators[id].time}</p>
            <p className="par">{dataAnimators[id].quantity}</p>
            </div>
            <button className="btnCTA">Оставить заявку</button> 
            </div>
        </div>
        <div className="wrapper6">
            <div className="wrapper6">
            <h2 className="titleProgram">Программа и активности</h2>
            <p className="text wrapText">{dataAnimators[id].description}</p>
            </div>
            <div className="programList" style={{backgroundImage: `url(${dataAnimators[id].image3})`}}>
                <div className="programWrapper">
            {dataAnimators[id].program.map(((item,index) => {
                return(
                    <ul key={index} className="out">
                        <li className="programItem text"><img src={circle} alt="circle" className="circle bigCircle" />{item}</li>
                    </ul>
                )
            }))
            }
            </div>
            </div>
            <div className="priceWrapper">
                <span className="animatorPrice">от {dataAnimators[id].price} ₽ / час</span>
                <button className="btnCTA">Получить расчет</button>
            </div>
        </div>
        </div>
    )
}

export default ItemDescription;