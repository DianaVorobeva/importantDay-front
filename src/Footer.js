import logo from './assets/logo.JPG';
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
                        <h3 className='address'>Москва, ул. Тучковская, 11к2</h3>
                        <h4 className='workHours'>Работаем c 09:00 до 21:00</h4>
                        </div>
                </div>
            </div>
            </div>
        </div>
        <div className="footer-bottom">
            <img src={logo} alt="logo" width="150px" className='logoFooter hidden'/>
            <div className="footer-bottom__left">
                <p>© 2014-2023 «АрчиШоу» Студия детских праздников</p>
            </div>
        </div>
    </footer> ) }
    
    export default Footer;