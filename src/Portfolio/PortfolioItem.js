import SliderItems from "./SliderItems";
import { dataPortfolio } from '../data/dataPortfolio';
import check from '../assets/check.png'; 
import VideoPortfolio from "./VideoPortfolio";

function PortfolioItem({id}) {
    return (
        <div>
            <h2 className="headerDecorItem">{dataPortfolio[id].title}</h2>
            <div className="decorContainer">
            
            <div className="portfolioContainer">
                <h3 className="titleSlide">{dataPortfolio[id].header}</h3>
                <div className="portfolioInfo">
                {dataPortfolio[id].program.map((item,index) => {
                    return (
                        <div key={index}>
                            <div className="listItem2">
                        <img src={check} alt="check" className="check"/><li className="textPortfolio">{item}</li>
                        </div>
                        </div>
                    )
                })}
                </div>
                <div className="decorContainer">
                    <VideoPortfolio id={id}/>
                <button className="btnCTA">Хочу так же!</button> 
                </div>
            </div>

            <div className="sliderDecorCont">
            <SliderItems id={id}/>
            </div>
            </div>
        </div>
    )
}

export default PortfolioItem;