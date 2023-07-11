import SliderItems from "./SliderItems";
import { dataPortfolio } from '../data/dataPortfolio';
import check from '../assets/check.png'; 
import VideoPortfolio from "./VideoPortfolio";

function PortfolioItem({id,handleFormModal}) {
    return (
        <div>
            <h2 className="headerDecorItem">{dataPortfolio[id].title}</h2>
            <div className="decorContainer">
            
            <div className="">
            
                <div className="portfolioContainer">
                    <VideoPortfolio id={id}/>
                <button className="btnCTA btnWant"  onClick={handleFormModal}>Хочу так же!</button> 
                </div>
            </div>

            
            </div>
        </div>
    )
}

export default PortfolioItem;