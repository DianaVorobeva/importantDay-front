function AnimatorsItems({title,id,image,showComponent,setShowComponent,setItemId}) {

    

    const viewItem = (e) => {
        e.preventDefault();
        setShowComponent(!showComponent);
        setItemId(id)
    }

    return (
<div key={id} className="contAnimators img-responsive">
<img src={image} alt="animators"/>
<h3 className="text">{title}</h3>
<button onClick={viewItem} className="btnCTA onHoverBtn">Подробнее</button> 
</div>
    )
}

export default AnimatorsItems;