// import Accordion from 'accordion-js';
// import Swiper, { Navigation, Pagination } from 'swiper';
// import iziToast from 'izitoast';
// import raty from 'raty-js';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
  duration: 1000,
  ariaEnabled: true,
  collapse: true,
  elementClass: 'ac',
  //     triggerClass: 'ac-trigger',
  //   panelClass: 'ac-panel',
  beforeOpen() {},
});
