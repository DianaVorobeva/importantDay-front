import { AiOutlineAlignLeft } from 'react-icons/ai';

function FilterAnimators({filterAge,filterSex,filterAll}) {
  

    return (

<div className="container-big">
		<div className="btn btn--white btn--icon filter-mob-btn">
			<AiOutlineAlignLeft></AiOutlineAlignLeft>Фильтры
		</div>


		<div className="filter text" >
			
<div className='filter-group'>
	<div className="filter-group__title menu-14">&nbsp;</div>
	<div className="filter-group__list">
		<button onClick={() => filterAll()} className='filter-group__list__item'>
			<span><mark>Все вместе</mark></span>
		</button>
	</div>
</div>

<div className="filter-group">
	<div className="filter-group__title menu-14">Для кого</div>
	<div className="filter-group__list">
                <button onClick={() => filterSex("all")} className='filter-group__list__item'>
				<span><mark>Универсальные</mark></span>
                </button>
        
				<button onClick={() => filterSex("boys")} className="filter-group__list__item">
				<span><mark>Мальчик</mark></span>
                </button>

				<button onClick={() => filterSex("girls")} className="filter-group__list__item">
				<span><mark>Девочка</mark></span>
                </button>
			</div>
</div>

<div className="filter-group">
	<div className="filter-group__title menu-14">Возраст ребенка</div>
	<div className="filter-group__list">
								<button onClick={() => filterAge("3-4 года")} className="filter-group__list__item">
				<span><mark>3-4 года</mark></span>
                                </button>
								<button onClick={() => filterAge("5-6 лет")} className="filter-group__list__item ">
				<span><mark>5-6 лет</mark></span>
                </button>
								<button onClick={() => filterAge("7-8 лет")} className="filter-group__list__item ">
				<span><mark>7-8 лет</mark></span>
                </button>
								<button onClick={() => filterAge("9-10 лет")} className="filter-group__list__item ">
				<span><mark>9-10 лет</mark></span>
                </button>
			</div>
</div>		
</div>
	</div>
    )
}

export default FilterAnimators;