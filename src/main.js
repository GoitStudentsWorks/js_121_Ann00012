import Accordion from 'accordion-js';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';;
import iziToast from 'izitoast';
import raty from 'raty-js';

// my code

import { addClassName, remoweClassName  } from './js/details-modal';

const modalOverlay = document.querySelector('.modal-overlay');

const closeButton = document.querySelector('.close-button');


// Показує модальне вікно, кнопка ще не вибрана
// closeButton.addEventListener('click', () => { 
//   addClassName(modalOverlay);
// }); 


closeButton.addEventListener('click', () => {
    remoweClassName(modalOverlay);
});
