import { AiOutlineAlignLeft } from 'react-icons/ai';

function FilterShow({filterType,filterAll}) {
  

    return (

<div className="container-big">
		<div className="btn btn--white btn--icon filter-mob-btn">
			<AiOutlineAlignLeft></AiOutlineAlignLeft>Фильтры
		</div>


		<div className="filter text" >
			
<div className='filter-group'>

	<div className="filter-group__list">
		<button onClick={() => filterAll()} className='filter-group__list__item'>
			<span><mark>Все вместе</mark></span>
		</button>
	</div>
</div>

<div className="filter-group">

	<div className="filter-group__list">
				<button onClick={() => filterType("quest")} className="filter-group__list__item">
				<span><mark>Программы и квесты</mark></span>
                </button>

				<button onClick={() => filterType("show")} className="filter-group__list__item">
				<span><mark>Шоу</mark></span>
                </button>
			</div>
</div>
	
</div>
	</div>
    )
}

export default FilterShow;