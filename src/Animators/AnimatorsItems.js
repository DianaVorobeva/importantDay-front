function AnimatorsItems({title,id,image}) {

    return (
<div key={id} className="contAnimators img-responsive">
<img src={image} alt="animators" className="animator-preview-img"/>
<h3 className="text">{title}</h3>
</div>
    )
}

export default AnimatorsItems;