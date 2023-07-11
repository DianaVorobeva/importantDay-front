import balloons from '../assets/balloons.jpg';
import iceDecor from '../assets/iceDecor.jpg';
import candyBar from '../assets/candyBar.jpg';
import flowerDecor from '../assets/flowerDecor.jpg';
import pinkPhoto from '../assets/pinkPhoto.jpg';
import oneYear from '../assets/oneYear.jpg';
import candyBarBoy from '../assets/candyBarBoy.jpg';
import candyBarBoy2 from '../assets/candyBarBoy2.jpg';
import sweetsTable from '../assets/sweetsTable.jpg';
import balloons1 from '../assets/balloons1.jpg';
import balloons2 from '../assets/balloons2.jpg';
import balloons3 from '../assets/balloons3.jpg';
import balloons4 from '../assets/balloons4.jpg';
import balloons5 from '../assets/balloons5.jpg';

export const dataDecorations = [
    {
        id:0,
        image: iceDecor,
        title:'Тематические фотозоны',
        slider: [iceDecor,
                flowerDecor,
                pinkPhoto,
                oneYear,
],  
    },

    {
        id:1,
        title:'Декор Кэнди-бара',
        image: candyBar,
        slider: [candyBarBoy,
                candyBarBoy2,
                sweetsTable,
                candyBar
                ],
    },

    {
        id:2,
        title:'Воздушные шары',
        image: balloons,
        slider: [balloons1,
                balloons,
                balloons2,
                balloons3,
                balloons4,
                balloons5,
                ],
    },

]