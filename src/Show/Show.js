import { dataShow } from '../data/dataShow'
import { useState } from "react";
import ShowItems from './ShowItems';
import ItemDescription from './ItemDescription';
import FilterShow from './FilterShow';



function Show({handleFormModal}) {
    const [showComponent, setShowComponent] = useState(true);
    const [itemId, setItemId] = useState(0);
    const [category, setCategory] = useState(dataShow);


    const filterAll = () => {
        const groupAll = dataShow;
        setCategory(groupAll);
     }

     const filterType = (type) => {
        const groupType = dataShow.filter(element => element.type === type);
        setCategory(groupType);
     }

    return (
        <div>
     {showComponent 
     ? 
     <div>
        <div className="contBanner3">
            <div className="newWrapper4">
            <h1>Шоу-программы</h1>
            <button className="btnCTA" onClick={handleFormModal}>Оставить заявку</button> 
            </div>
        </div>
     
         <FilterShow filterType={filterType} filterAll={filterAll}/>

            <div className="wrapper7">
            {category.map((item => {
                const {id,title,image1} = item;
                return(
                    <div key={id}>
                    <ShowItems title={title} id={id} image={image1} showComponent={showComponent} setShowComponent={setShowComponent} setItemId={setItemId}/>
                </div>
                )
            })
        )}
        </div>
        </div>

        :
        <ItemDescription id={itemId} handleFormModal={handleFormModal}/>}
        
        </div>
    )
}

export default Show;