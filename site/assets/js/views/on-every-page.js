 
import ScrollOut from "scroll-out";
import Sticky from "sticky-js";

//import home from "js/views/home";
import trainings from "js/views/trainings";
import about from "js/views/about";
import faq from "js/views/faq";
import Slideshows from "js/utils/slideshows";
import Scrollmove from "js/utils/scrollmove";
import ScrollText from "js/utils/scrolltext";
import imageclouds from "js/utils/imageclouds";

// lazy sizes for image loading
import 'lazysizes';

 
import { Popover } from 'bootstrap';

//import Popover from 'bootstrap/js/dist/popover';


import { map, lerp, getMousePosViewport, calcWinsize, getRandomNumber } from 'js/utils/utils';

export default function() {
    
  ScrollOut({
    /* options */
    once: true,
  });
/*
  ScrollOut({
    targets: ".banner",
    offset: 200,
  });
*/

  var sticky = new Sticky('.sticky');


  let root = document.documentElement;
  const colors = [
    "7 71 97", //#E6ECEE", //AC-Blue
    "125 15 75", //#E8D4DF", //AC-Red
    "54 115 92", //#36735c //AC-Green
    "208 143 76", //#F6E8DB", //AC-Yellow
  ];
  const colors_medium = [
      "193 209 215",        //AC-Blue - light
      "227 135 186",        //AC-Red - light
      "172 200 189",         //AC-Green - light
      "229 209 190",         //AC-Yellow - light
          ];
  const colors_light = [
      "230 236 238",        //AC-Blue - light
      "232 212 223",        //AC-Red - light
      "230 237 234",         //AC-Green - light
      "246 232 219",         //AC-Yellow - light
          ];
  let randomColor =  Math.floor(Math.random() * colors.length);

  root.style.setProperty('--primary', 'rgb('+colors[randomColor]+')');
  root.style.setProperty('--primary-medium', 'rgb('+colors_medium[randomColor]+')');
  root.style.setProperty('--primary-light', 'rgb('+colors_light[randomColor]+')');
  //root.style.setProperty('--color', colors[randomColor]);
  root.style.setProperty('--shadowColor', 'rgba('+colors[randomColor].split(' ').join(',')+', 0.3)');
  root.style.setProperty('--primary-opaque', 'rgba('+colors[randomColor].split(' ').join(',')+', 0.96)');
  root.style.setProperty('--primary-opaque-light', 'rgba('+colors_light[randomColor].split(' ').join(',')+', 0.75)');

  
  
  
 

  imageclouds();
  Scrollmove();
  ScrollText();
  Slideshows();
  //home();
  trainings();
  about();
  faq();



   
 
// still needed?
  const anmeldeToggler = document.querySelector(".anmelde-toggler");
if (anmeldeToggler) {

  anmeldeToggler.addEventListener('click', function() {
    document.querySelector('.box-anmelden .sticky').classList.toggle('d-none');
  });
}          
  


document.querySelectorAll('video[autoplay]').forEach( video => {
  video.play();
});
 

  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

  if (popoverTriggerList) {
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new Popover(popoverTriggerEl));
  }


 

  // Trainings: img block Animation:

  const images = document.querySelectorAll('.img-container');
  if (images) {


      // Calculate the viewport size
      let winsize = calcWinsize();
      window.addEventListener('resize', () => winsize = calcWinsize());

      // Track the mouse position
      let mousepos = {x: winsize.width/2, y: winsize.height/2};
      window.addEventListener('mousemove', ev => mousepos = getMousePosViewport(ev));



      function move(obj) {
        // amount to move in each axis
        let translationVals = {tx: 0, ty: 0};
        // get random start and end movement boundaries
        const xstart = getRandomNumber(20,50);
        const ystart = getRandomNumber(20,50);

        // infinite loop
        const render = () => {
            // Calculate the amount to move.
            // Using linear interpolation to smooth things out.
            // Translation values will be in the range of [-start, start] for a cursor movement from 0 to the window's width/height
            translationVals.tx = lerp(translationVals.tx, map(mousepos.x, 0, winsize.width, -xstart, xstart), 0.07);
            translationVals.ty = lerp(translationVals.ty, map(mousepos.y, 0, winsize.height, -ystart, ystart), 0.07);

          // gsap.set(this.DOM.el, {x: translationVals.tx, y: translationVals.ty});
          obj.style.transform = "translate("+ ( translationVals.tx) + "px,"+  (translationVals.ty) + "px)";
          //console.log( getMousePosViewport.x)
            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);
      }


      images.forEach(item => move(item));
    
  }
}



  