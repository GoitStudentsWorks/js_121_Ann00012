import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
  onOpen: function (currentElement) {
    console.log(currentElement);
  },
});
