import { dataAnimators } from "../data/dataAnimators";
import AnimatorsItems from "./AnimatorsItems";

function Animators({handleFormModal}) {

    return (
        <div>
    
     <div>
        <div className="contBanner2">
            <div className="newWrapper6">
            <h1>Аниматоры на день рождения и детский праздник</h1>
            <button className="btnCTA" onClick={handleFormModal}>Оставить заявку</button> 
            </div>
        </div>
            <div className="wrapper7">
            {dataAnimators.map((item => {
                const {id,title,image,show} = item;
                return(
                    <div key={id}>
                    <AnimatorsItems title={title} id={id} image={image}/>
                </div>
                )
            })
        )}
        </div>
        </div>

        
        </div>
    )
}

export default Animators;