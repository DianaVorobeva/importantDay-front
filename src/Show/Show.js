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
            <div className="wrapper5">
            <h1>Шоу-программы и квесты</h1>
            <p>В один миг сказка может превратиться в увлекательный перфоманс или квест и добавить волшебства этому дню. Больше тайн, больше загадок, больше игр и головоломок — чтобы никому не было скучно на нашем празднике!</p>
            <button className="btnCTA">Оставить заявку</button> 
            </div>
        </div>
        <div className="wrapper6">
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
        </div>

        :
        <ItemDescription id={itemId}/>}
        
        </div>
    )
}

export default Show;