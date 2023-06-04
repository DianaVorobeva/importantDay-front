import { dataAnimators } from "../data/dataAnimators";
import AnimatorsItems from "./AnimatorsItems";
import { useState } from "react";
import ItemDescription from "./ItemDescription";
import FilterAnimators from "./FilterAnimators";


function Animators({handleFormModal}) {
    const [showComponent, setShowComponent] = useState(true);
    const [itemId, setItemId] = useState(0);
    const [category, setCategory] = useState(dataAnimators);


    const filterSex = (sex) => {
        const groupSex = dataAnimators.filter(element => element.sex === sex);
        setCategory(groupSex);
   
     }

     const filterAge = (age) => {
        const groupAge = dataAnimators.filter(element => element.age === age);
        setCategory(groupAge);
     }

     const filterAll = () => {
        const groupAll = dataAnimators;
        setCategory(groupAll);
     }

    return (
        <div>
     {showComponent 
     ? 
     <div>
        <div className="contBanner2">
            <div className="wrapper5">
            <h1>Аниматоры на день рождения и детский праздник</h1>
            <p>Дети верят в сказку, чудо и супер-героев и мы поможем им побывать в мире сказок и поверить, что мечты по настоящему сбываются. Детские аниматоры Арчи Шоу это прирождённые профессиональные актёры, которые в мельчайших подробностях вживаются в самые разные роли.</p>
            <button className="btnCTA">Оставить заявку</button> 
            </div>
        </div>
        <div className="wrapper6">
            <FilterAnimators filterSex={filterSex} filterAge={filterAge} filterAll={filterAll}/>

            <div className="wrapper7">
            {category.map((item => {
                const {id,title,image1,show} = item;
                return(
                    <div key={id}>
                    <AnimatorsItems title={title} id={id} image={image1} showComponent={showComponent} setShowComponent={setShowComponent} setItemId={setItemId}/>
                </div>
                )
            })
        )}
        </div>
        </div>
        </div>

        :
        <ItemDescription id={itemId}/>}
        
        </div>
    )
}

export default Animators;