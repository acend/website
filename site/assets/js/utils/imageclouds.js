  
import { map, lerp, getMousePosViewport, calcWinsize, getRandomNumber } from 'js/utils/utils';

export default function() {


  //console.log('imageclouds' );
  const imageclouds = document.querySelectorAll('.imagecloud');


  if (!imageclouds) return;

  imageclouds.forEach(imagecloud => {
    const children = imagecloud.children;
    if (children.length > 0) {
      const randomChild = children[Math.floor(Math.random() * children.length)];
      randomChild.classList.replace('d-none', 'd-flex');
      
      setTimeout(() => {
        randomChild.dataset.scroll = 'in';
      }, 200);

      
    }
  });




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