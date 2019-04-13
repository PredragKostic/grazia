import 'bootstrap';

import '../scss/index.scss';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab)

dom.i2svg();

$('#alert').click(() => {
  alert('jQuery works!');
});

// Your jQuery code
// $('[data-toggle=dropdown]').hover(
//   function(){
//     $(this).parent().addClass('show');
//     $(this).attr('aria-expanded', true);
//     console.log('in');
//   },
//   function(){
//     console.log('out');
//     $(this).parent().removeClass('show');
//     $(this).attr('aria-expanded', false);
//   }
// );