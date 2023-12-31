import './App.css';
import {

  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from './assets/logo.png';
import About from './About';
import Home from './Home';
import Animators from './Animators/Animators';
import Show from './Show/Show';
import MasterClasses from '../src/MasterClasses/MasterClasses';
import Additional from '../src/Additional/Additional';
import Portfolio from './Portfolio/Portfolio';
import telegram from './assets/telegram.png';
import youtube from './assets/youtube.png';
import vk from './assets/vk.png'
import Sweets from './Sweets/Sweets';
import Decorations from './Decorations/Decorations';
import Footer from './Footer';
import { useState } from 'react';
import FormFeedback from './Form/FormFeedback';
import FormModal from './Form/FormModal';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormModal = () => {
      setIsOpen(true);
  }
  return (
    <div>

  <nav>
  <Link to="/"><img src={logo} alt='logo' className='logo'/></Link>
  <div className='containerLinks'>
    <div className='contLink1'>
    <Link to="/about" className='link1'>О нас</Link>
    <span className='dot'>.</span>
    <Link to="/portfolio" className='link1'>Наши кейсы</Link>
    <span className='dot'>.</span>
    <Link to="tel:9876543210" className='phone'>+7 (499) 877-51-38</Link>
    <Link to="https://vk.com/id811802059"  className='link1 linkVk'><img src={vk} width="40px" alt="vk"/></Link>
    <Link to="https://t.me/animatorisochi" className='linkContact linkTelegram'><img src={telegram} width="40px" alt="telegram"/>Telegram</Link>
    <Link to="https://youtube.com/@PrazdnikSochiAndMoscow2023" className='linkContact linkWhatsApp linkYoutube'><img src={youtube} width="40px" alt="Youtube" fill="currentColor"/>Youtube</Link>
    </div>
    <div className='contLink2'>
    <Link to="/animators" className='link2'>Аниматоры</Link>
    <Link to="/show" className='link2'>Шоу-программы и квесты</Link>
    <Link to="/masterClasses" className='link2'>Мастер-классы</Link>
    <Link to="/sweets" className='link2'>Сладости и угощения</Link>
    <Link to="/decorations" className='link2'>Оформление праздника</Link>
    <Link to="/additional" className='link2'>Дополнительные услуги</Link>
    </div>
    </div>
  </nav>

  <Routes>
       <Route path="/" element={<Home handleFormModal={handleFormModal}/>}/>
       <Route path="/about" element={<About handleFormModal={handleFormModal}/>}/>
       <Route path="/portfolio" element={<Portfolio handleFormModal={handleFormModal}/>}/>
       <Route path="/animators" element={<Animators handleFormModal={handleFormModal}/>}/>
       <Route path="/show" element={<Show handleFormModal={handleFormModal}/>}/>
       <Route path="/masterClasses" element={<MasterClasses handleFormModal={handleFormModal}/>}/>
       <Route path="/sweets" element={<Sweets handleFormModal={handleFormModal}/>}/>
       <Route path="/decorations" element={<Decorations handleFormModal={handleFormModal}/>}/>
       <Route path="/additional" element={<Additional handleFormModal={handleFormModal}/>}/>
  </Routes>

  <FormModal open={isOpen} onClose={() => setIsOpen(false)}>
            <FormFeedback/>
        </FormModal>
        
<Footer/>
  


  </div>
  );
}

export default App;
