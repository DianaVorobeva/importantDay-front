import Slider from "./Slider";
import { dataOptions } from "./data/dataOptions";
import About from "./About"; 
import VideoBanner from "./video/VideoBanner"; 
import circle from './assets/circle.png'; 
import FAQ from "./FAQ";

function Home({handleFormModal}) { 
    
    const jump = (link) => { 
        window.location.assign(`http://localhost:3000/${link}`); 
    } 


    return (
<div>
	<div className="contBanner">
	<div className="wrapper9">
		<h1>Организация детских праздников от профессиональных аниматоров в Москве</h1>
		<p>Поможем Вам с выбором программы под любой возраст и бюджет!</p>
		 <button className="btnCTA" onClick={handleFormModal}>Бесплатный подбор</button> 
	</div>
	</div>
	<div>
		<Slider/>
		<div className="wrapper">
			<h1 className="titleText">Получите удовольствие от каждой минуты</h1>
			<p className="textOf">Для агентства «АрчиШоу» организация детских праздников – главная миссия уже больше 8 лет. Ведь праздничные мероприятия – самые яркие воспоминания для будущих взрослых, это магия и чудо, которые они пронесут с собой через всю жизнь. Мы всегда стараемся по-настоящему удивить ребенка, и каждое наше мероприятие уникально. Десятки интерактивных программ, профессиональные аниматоры, которые обожают свою работу, яркие декорации, вкусный и полезный сладкий стол – вот лишь немногое, что ждет именинника и его гостей.</p>
		</div>
	</div>
	<div> {dataOptions.map(item => { 
		const {id,option,title,text,link,image,bgColor} = item; 
	if(id%2) { 
		return (
		<div className="wrapper3" key={id} style={{backgroundColor:`${bgColor}`}}>
			<div className="block2"> <img src={image} alt="options" /> </div>
			<div className="block3">
				<p className="optionText">{option}</p>
				<h2 className="titleOption">{title}</h2>
				<p className="textOption">{text}</p>
				<div>
				 <button onClick={()=> jump(link)} className="btnOptions">Варианты</button>
				 <button className="btnCTA">Бесплатный подбор</button> 
				 </div>
			</div>
		</div> ) } 
	else { 
		return (
		<div className="wrapper3" key={id} style={{backgroundColor:`${bgColor}`}}>
			<div className="block3">
				<p className="optionText">{option}</p>
				<h2 className="titleOption">{title}</h2>
				<p className="textOption">{text}</p>
				<div> 
				<button onClick={()=> jump(link)} className="btnOptions">Варианты</button> 
				<button className="btnCTA">Бесплатный подбор</button> </div>
			</div>
			<div className="block2"> <img src={image} alt="options" /> </div>
		</div> ) } }) } </div>
	<div>
		<About/>
		 </div>
	<div>
		<VideoBanner/> </div>
	<div className="wrapper4">
		<h2 className="headerSlide">Тарифы праздника</h2>
		<div className="pricing">
			<div className="priceBlock">
				<h4 className="titlePricing">Самое главное</h4>
				<h3 className="price">от 75 000 ₽</h3>
				<p className="old-price">80 000 ₽</p>
				<ul className="list">
					<li><img src={circle} alt="circle" className="circle" />2-3 Аниматора</li>
					<li><img src={circle} alt="circle" className="circle" />Продолжительность праздника: 2-4 часа</li>
					<li><img src={circle} alt="circle" className="circle" />Фотосъемка праздника</li>
					<li><img src={circle} alt="circle" className="circle" />Базовое звуковое оборудование</li>
					<li><img src={circle} alt="circle" className="circle" />Шоу-программа из базового каталога</li>
					<li><img src={circle} alt="circle" className="circle" />Оформление шарами</li>
				</ul> <button className="btnCTA">Заказать</button> </div>
			<div className="priceBlock">
				<h4 className="titlePricing">Золотая середина</h4>
				<h3 className="price">от 150 000 ₽</h3>
				<p className="old-price">165 000 ₽</p>
				<ul className="list">
					<li><img src={circle} alt="circle" className="circle" />2-5 Аниматоров</li>
					<li><img src={circle} alt="circle" className="circle" />Продолжительность праздника: 3-5 часа</li>
					<li><img src={circle} alt="circle" className="circle" />Фотосъемка праздника</li>
					<li><img src={circle} alt="circle" className="circle" />Базовое звуковое оборудование</li>
					<li><img src={circle} alt="circle" className="circle" />Шоу-программа из базового каталога</li>
					<li><img src={circle} alt="circle" className="circle" />Расширенный пакет оформления воздушными шарами</li>
					<li><img src={circle} alt="circle" className="circle" />Фотозона до 10 элементов декора</li>
					<li><img src={circle} alt="circle" className="circle" />Шоу-программа из авторского каталога</li>
					<li><img src={circle} alt="circle" className="circle" />1 добавка из расширенного каталога услуг</li>
					<li><img src={circle} alt="circle" className="circle" />Шоу-программа из авторского каталога</li>
					<li><img src={circle} alt="circle" className="circle" />Персональный ивент-менеджер на площадке</li>
				</ul> <button className="btnCTA">Заказать</button> </div>
			<div className="priceBlock">
				<h4 className="titlePricing">Возможно всё</h4>
				<h3 className="price">от 350 000 ₽</h3>
				<p className="old-price">390 000 ₽</p>
				<ul className="list">
					<li><img src={circle} alt="circle" className="circle" />Анимационная программа, квест или интерактивный спектакль с 4-7 героями</li>
					<li><img src={circle} alt="circle" className="circle" />Продолжительность праздника: 4-7 часа</li>
					<li><img src={circle} alt="circle" className="circle" />1+ шоу-программа из базового каталога</li>
					<li><img src={circle} alt="circle" className="circle" />2+ шоу-программы из авторского каталога</li>
					<li><img src={circle} alt="circle" className="circle" />Расширенная премиум-фотозона до 20 элементов декора</li>
					<li><img src={circle} alt="circle" className="circle" />Расширенный пакет оформления воздушными шарами</li>
					<li><img src={circle} alt="circle" className="circle" />Фотосъемка праздника</li>
					<li><img src={circle} alt="circle" className="circle" />Звуковое и световое оборудование</li>
					<li><img src={circle} alt="circle" className="circle" />2+ добавки из расширенного каталога услуг</li>
					<li><img src={circle} alt="circle" className="circle" />Оформление Candy-bar, тематические сладости и торт</li>
					<li><img src={circle} alt="circle" className="circle" />Тематическое оформление стола</li>
					<li><img src={circle} alt="circle" className="circle" />Персональный подбор площадки для праздника</li>
					<li><img src={circle} alt="circle" className="circle" />Персональный ивент-менеджер до и после мероприятия</li>
					<li><img src={circle} alt="circle" className="circle" />Электронные пригласительные стилизованные под тематику/оформление праздника</li>
				</ul> <button className="btnCTA">Заказать</button> </div>
		</div>
	</div>
	<FAQ/>

</div> ) } export default Home;

