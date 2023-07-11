import cakeTop from '../assets/cakeTop.jpg';
import cake2 from '../assets/cake2.jpg';
import cake3 from '../assets/cake3.jpg';
import cake4 from '../assets/cake4.jpg';
import cake5 from '../assets/cake5.jpg';
import cake6 from '../assets/cake6.jpg';
import cottonCandy from '../assets/cottonCandy.jpg';
import chocolateFountain from '../assets/chocolateFountain.jpg';
import food from '../assets/food.jpg';

export const dataSweets = [
    {
        id:0,
        title:'Детские торты',
        image: cakeTop,
        slider: [cake2,
                cake3,
                cake4,
                cake5,
                cake6
                ],
    },

    {
        id:1,
        title:'Шоколадный фонтан',
        image: chocolateFountain,
    },
    {
        id:2,
        title:'Детский кейтеринг',
        image: food,
    },

    {
        id:3,
        title:'Сладкая Вата',
        image: cottonCandy,
    },
]