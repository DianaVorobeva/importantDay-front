import youtube from './assets/youtube.png';
import telegram from './assets/telegram.png';
import vk from './assets/vk.png'
import MapModal from './MapModel';
import { Link } from "react-router-dom";



function Footer() { 

    return (
    <footer className="site-footer">
        <div className="container-big">
            
            <div className="footer-top">
     
                <div className="row">
                    <div className="col">
                        <Link to="/animators" className='linkFooter'>Детские аниматоры</Link>
                        <Link to="/show" className='linkFooter'>Шоу-программы и квесты</Link>
                        <Link to="/decorations" className='linkFooter'>Оформление праздника</Link>
                        <Link to="/sweets" className='linkFooter'>Сладости и угощения</Link>
                        </div>
                    <div className="col">
                        <Link to="/masterClasses" className='linkFooter'>Мастер-классы</Link>
                        <Link to="/additional" className='linkFooter'>Дополнительные услуги</Link>
                        <Link to="/portfolio" className='linkFooter'>Портфолио</Link>
                        <Link to="/articles" className='linkFooter'>Статьи</Link>               
                    </div>
                </div>
       
            
            <div className="footer-contacts">
                <div className="info">   
                        <MapModal/>
                        <div>
                        <h3 className='address'>г.Сочи, микрорайн Центральный, ул.Навагинская, 9Д торговый центр Атриум, 4 этаж</h3>
                        <h3 className='address'></h3>
                        </div>
                </div>
            </div>
            </div>
        </div>
        <div className="footer-bottom">
          
            <div className="footer-bottom__left">
                <p>Агенство детских праздников "Важный день"</p>
                <p className="footer-bottom__left_info">Политика конфиденциальности</p>
            </div>
            <div className='socials'>
            <Link to="https://vk.com/id811802059" className='link1 linkVk'><img src={vk} width="40px" alt="vk"/></Link>
            <Link to="https://t.me/animatorisochi" className='linkContact2 linkTelegram'><img src={telegram} width="40px" alt="telegram"/>Telegram</Link>
            <Link to="https://youtube.com/@PrazdnikSochiAndMoscow2023" className='linkContact2 linkYoutube'><img src={youtube} width="40px" alt="youtube"/>Youtube</Link>
            </div>
        </div>
    </footer> ) }
    
    export default Footer;
    

    