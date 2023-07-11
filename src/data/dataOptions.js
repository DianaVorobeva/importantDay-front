import barbie from '../assets/barbie.jpg';
import monkey from '../assets/monkey.jpg';
import children from '../assets/children.jpg';
import carSmall from '../assets/carSmall.jpg';
import cake from '../assets/cake.jpg';
import smile from '../assets/smile.jpg';

export const dataOptions = [
    {   
        id:0,
        option: 'АНИМАЦИОННЫЕ ПРОГРАММЫ',
        title: 'Поможем подобрать подходящую для вашего ребенка тематику.',
        link: 'animators',
        bgColor: '#10a5bd',
        bgAnimation: '#df7583',
        image: barbie,
        text: "Barbie"
    },

    {
        id:1,
        option: 'ШОУ-ПРОГРАММЫ И КВЕСТЫ',
        title: 'Шоу программы на детский праздник подарят радость, веселье и незабываемую атмосферу.',
        link: 'show',
        bgColor: '#df7583',
        bgAnimation: '#8c6990',
        image: monkey
    },

    {
        id:2,
        option: 'СЛАДОСТИ И УГОЩЕНИЯ',
        title: 'Торты и угощения',
        link: 'sweets',
        bgColor: '#8c6990',
        bgAnimation: '#89ccb6',
        image: cake
    },

    {
        id:3,
        option: 'МАСТЕР-КЛАССЫ',
        title: 'Наши мастер-классы',
        link: 'masterClasses',
        bgColor: '#89ccb6',
        bgAnimation: '#f7cfcc',
        image: children
    },

    {
        id:4,
        option: 'ОФОРМЛЕНИЕ И ДЕКОРАЦИИ',
        title: 'Самые красивые декорации и фотозоны',
        link: 'decorations',
        bgColor: '#f7cfcc',
        bgAnimation: '#d9d6f1',
        image: carSmall
    },

    {
        id:5,
        option: 'ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ',
        title: 'Дополнительные услуги',
        link: 'additional',
        bgColor: '#d9d6f1',
        bgAnimation: '#fff',
        image: smile
    }
]