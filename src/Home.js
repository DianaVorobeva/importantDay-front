import Slider from "./Slider";
import { dataOptions } from "./data/dataOptions";
import VideoBanner from "./video/VideoBanner";  
import FAQ from "./FAQ";
import React from 'react';
import FormFeedback from "./Form/FormFeedback";
import feedback from './assets/feedback.jpg';
import mainImage from '../src/assets/mainImage.jpg'

function Home({handleFormModal}) { 
    
    const jump = (link) => { 
        window.location.assign(`http://localhost:3000/${link}`); 
    } 


    return (
<div>
	<div className="contBanner">
	<div className="waves waves--bottom waves--white waves--big waves--anim">
		
		<svg width="3884" height="129" viewBox="0 0 3884 129" fill="#FFF" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path d="M3884 114.001V129L9.64582e-05 129L9.77696e-05 114C181.5 114 388.812 66.8065 575.135 48.6299C672.118 39.1976 762.047 24.3615 858.442 14.438C1019.79 -2.16661 1198.47 -4.52467 1364.51 7.75688C1557.6 22.1017 1734.22 55.6058 1933.18 59.3394C1936.12 59.3394 1939.06 59.4376 1942 59.4376C1944.94 59.4376 1947.88 59.3394 1950.82 59.3394C2149.78 55.6058 2326.4 22.1017 2519.49 7.75688C2685.53 -4.52467 2864.21 -2.16661 3025.56 14.438C3121.95 24.3615 3211.88 39.1976 3308.86 48.6299C3495.19 66.8065 3704 114.001 3884 114.001Z" />
		</svg>
		<svg width="3884" height="129" viewBox="0 0 3884 129" fill="#FFF" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path d="M3884 114.001V129L9.64582e-05 129L9.77696e-05 114C181.5 114 388.812 66.8065 575.135 48.6299C672.118 39.1976 762.047 24.3615 858.442 14.438C1019.79 -2.16661 1198.47 -4.52467 1364.51 7.75688C1557.6 22.1017 1734.22 55.6058 1933.18 59.3394C1936.12 59.3394 1939.06 59.4376 1942 59.4376C1944.94 59.4376 1947.88 59.3394 1950.82 59.3394C2149.78 55.6058 2326.4 22.1017 2519.49 7.75688C2685.53 -4.52467 2864.21 -2.16661 3025.56 14.438C3121.95 24.3615 3211.88 39.1976 3308.86 48.6299C3495.19 66.8065 3704 114.001 3884 114.001Z"  />
		</svg>
		<svg width="3884" height="129" viewBox="0 0 3884 129" fill="#FFF" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path d="M3884 114.001V129L9.64582e-05 129L9.77696e-05 114C181.5 114 388.812 66.8065 575.135 48.6299C672.118 39.1976 762.047 24.3615 858.442 14.438C1019.79 -2.16661 1198.47 -4.52467 1364.51 7.75688C1557.6 22.1017 1734.22 55.6058 1933.18 59.3394C1936.12 59.3394 1939.06 59.4376 1942 59.4376C1944.94 59.4376 1947.88 59.3394 1950.82 59.3394C2149.78 55.6058 2326.4 22.1017 2519.49 7.75688C2685.53 -4.52467 2864.21 -2.16661 3025.56 14.438C3121.95 24.3615 3211.88 39.1976 3308.86 48.6299C3495.19 66.8065 3704 114.001 3884 114.001Z"  />
		</svg>	</div>
	<div className="wrapper22">
		<img src={mainImage} alt="mainImage" className="mainImage"/>
		<h1 className="mainHeader">Организовываем детские мероприятия любой сложности под ключ.</h1>
		<p className="textCTA">Позвоните, и мы поможем вам подобрать программу для вашего праздника.</p>
		 <button className="btnCTA1" onClick={handleFormModal}>Бесплатный подбор</button> 
	</div>
	</div>
	<div>
		<Slider/>
	</div>
	
	<div> {dataOptions.map(item => { 
		const {id,option,title,text,link,image,bgColor,bgAnimation} = item; 
	if(id%2) { 
		return (
		<div className="wrapper3" key={id} style={{backgroundColor:`${bgColor}`}}>
			<div className="imageBanner2"> 
			    <img src={image} alt="options" className="bannerOptions" /> 
				<p>{text}</p>
				</div>
			<div className="block3">
				<p className="optionText">{option}</p>
				<h2 className="titleOption">{title}</h2>
				
				<div>
				 <button onClick={()=> jump(link)} className="btnOptions">Варианты</button>
				 <button className="btnCTA" onClick={handleFormModal}>Бесплатный подбор</button> 
				 </div>
			</div>
			<div className="waves waves--bottom waves--white waves--big waves--anim" >
		
		<svg width="3884" height="129" viewBox="0 0 3884 129" style={{fill:`${bgAnimation}`}} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path  d="M3884 114.001V129L9.64582e-05 129L9.77696e-05 114C181.5 114 388.812 66.8065 575.135 48.6299C672.118 39.1976 762.047 24.3615 858.442 14.438C1019.79 -2.16661 1198.47 -4.52467 1364.51 7.75688C1557.6 22.1017 1734.22 55.6058 1933.18 59.3394C1936.12 59.3394 1939.06 59.4376 1942 59.4376C1944.94 59.4376 1947.88 59.3394 1950.82 59.3394C2149.78 55.6058 2326.4 22.1017 2519.49 7.75688C2685.53 -4.52467 2864.21 -2.16661 3025.56 14.438C3121.95 24.3615 3211.88 39.1976 3308.86 48.6299C3495.19 66.8065 3704 114.001 3884 114.001Z" />
		</svg>
		<svg width="3884" height="129" viewBox="0 0 3884 129" style={{fill:`${bgAnimation}`}} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path d="M3884 114.001V129L9.64582e-05 129L9.77696e-05 114C181.5 114 388.812 66.8065 575.135 48.6299C672.118 39.1976 762.047 24.3615 858.442 14.438C1019.79 -2.16661 1198.47 -4.52467 1364.51 7.75688C1557.6 22.1017 1734.22 55.6058 1933.18 59.3394C1936.12 59.3394 1939.06 59.4376 1942 59.4376C1944.94 59.4376 1947.88 59.3394 1950.82 59.3394C2149.78 55.6058 2326.4 22.1017 2519.49 7.75688C2685.53 -4.52467 2864.21 -2.16661 3025.56 14.438C3121.95 24.3615 3211.88 39.1976 3308.86 48.6299C3495.19 66.8065 3704 114.001 3884 114.001Z"  />
		</svg>
		<svg width="3884" height="129" viewBox="0 0 3884 129" style={{fill:`${bgAnimation}`}}  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path d="M3884 114.001V129L9.64582e-05 129L9.77696e-05 114C181.5 114 388.812 66.8065 575.135 48.6299C672.118 39.1976 762.047 24.3615 858.442 14.438C1019.79 -2.16661 1198.47 -4.52467 1364.51 7.75688C1557.6 22.1017 1734.22 55.6058 1933.18 59.3394C1936.12 59.3394 1939.06 59.4376 1942 59.4376C1944.94 59.4376 1947.88 59.3394 1950.82 59.3394C2149.78 55.6058 2326.4 22.1017 2519.49 7.75688C2685.53 -4.52467 2864.21 -2.16661 3025.56 14.438C3121.95 24.3615 3211.88 39.1976 3308.86 48.6299C3495.19 66.8065 3704 114.001 3884 114.001Z"  />
		</svg>	</div>
		</div> ) } 
	else { 
		return (
		<div className="wrapper3" key={id} style={{backgroundColor:`${bgColor}`}}>
			<div className="block3">
				<p className="optionText">{option}</p>
				<h2 className="titleOption">{title}</h2>
				
				<div> 
				<button onClick={()=> jump(link)} className="btnOptions">Варианты</button> 
				<button className="btnCTA" onClick={handleFormModal}>Бесплатный подбор</button> </div>
			</div>
			<div className="imageBanner1">
				<img src={image} alt="options" className="bannerOptions" />
				<p className="barbie">{text}</p>
				  </div>
				  <div className="waves waves--bottom waves--white waves--big waves--anim" >
		
		<svg width="3884" height="129" viewBox="0 0 3884 129" style={{fill:`${bgAnimation}`}} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path  d="M3884 114.001V129L9.64582e-05 129L9.77696e-05 114C181.5 114 388.812 66.8065 575.135 48.6299C672.118 39.1976 762.047 24.3615 858.442 14.438C1019.79 -2.16661 1198.47 -4.52467 1364.51 7.75688C1557.6 22.1017 1734.22 55.6058 1933.18 59.3394C1936.12 59.3394 1939.06 59.4376 1942 59.4376C1944.94 59.4376 1947.88 59.3394 1950.82 59.3394C2149.78 55.6058 2326.4 22.1017 2519.49 7.75688C2685.53 -4.52467 2864.21 -2.16661 3025.56 14.438C3121.95 24.3615 3211.88 39.1976 3308.86 48.6299C3495.19 66.8065 3704 114.001 3884 114.001Z" />
		</svg>
		<svg width="3884" height="129" viewBox="0 0 3884 129" style={{fill:`${bgAnimation}`}} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path d="M3884 114.001V129L9.64582e-05 129L9.77696e-05 114C181.5 114 388.812 66.8065 575.135 48.6299C672.118 39.1976 762.047 24.3615 858.442 14.438C1019.79 -2.16661 1198.47 -4.52467 1364.51 7.75688C1557.6 22.1017 1734.22 55.6058 1933.18 59.3394C1936.12 59.3394 1939.06 59.4376 1942 59.4376C1944.94 59.4376 1947.88 59.3394 1950.82 59.3394C2149.78 55.6058 2326.4 22.1017 2519.49 7.75688C2685.53 -4.52467 2864.21 -2.16661 3025.56 14.438C3121.95 24.3615 3211.88 39.1976 3308.86 48.6299C3495.19 66.8065 3704 114.001 3884 114.001Z"  />
		</svg>
		<svg width="3884" height="129" viewBox="0 0 3884 129" style={{fill:`${bgAnimation}`}}  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path d="M3884 114.001V129L9.64582e-05 129L9.77696e-05 114C181.5 114 388.812 66.8065 575.135 48.6299C672.118 39.1976 762.047 24.3615 858.442 14.438C1019.79 -2.16661 1198.47 -4.52467 1364.51 7.75688C1557.6 22.1017 1734.22 55.6058 1933.18 59.3394C1936.12 59.3394 1939.06 59.4376 1942 59.4376C1944.94 59.4376 1947.88 59.3394 1950.82 59.3394C2149.78 55.6058 2326.4 22.1017 2519.49 7.75688C2685.53 -4.52467 2864.21 -2.16661 3025.56 14.438C3121.95 24.3615 3211.88 39.1976 3308.86 48.6299C3495.19 66.8065 3704 114.001 3884 114.001Z"  />
		</svg>	</div>
		</div> ) } }) } 
		</div>
	
	<div>
		<VideoBanner handleFormModal={handleFormModal}/>
    </div>
	<FAQ/>
	<div className="blueBlock">
	<h1 className="headerBlueBlock">Форма волшебства</h1>
	<div className="coverBlock">
		
		<div className="blockFeedback">
			<FormFeedback/>
		</div>
	
	<img src={feedback} alt="group" className="imageFeedback"/>
	</div>
	</div>
	
	

</div> ) } 
export default Home;

