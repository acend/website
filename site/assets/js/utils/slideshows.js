import  Flickity from 'flickity';
//import anime from 'animejs'; // old home slider
  
export default function() {

  const articleSlideshows = document.querySelectorAll('.entry-content .slides');

  if (articleSlideshows) {
      

    articleSlideshows.forEach((el) => {



      var flkty = new Flickity(el.querySelector('.carousel'), {  
        //lazyLoad: 2,
        prevNextButtons: false,
        pageDots: false,
      //	autoPlay: $this.hasClass('auto-play') ? 3000 : false,
        wrapAround: true ,
        cellAlign: 'left',
        adaptiveHeight: true,
        on: {
          ready: function() {
            //console.log('Flickity ready');
            window.dispatchEvent(new Event('resize'));
          }
        }
      });
      
     
      /*
      flkty.on( 'staticClick', function(  ) {
        flkty.selectedIndex == flkty.cells.length - 1  ? flkty.select( 0 ) : flkty.next();

      });
  */
      const carouselCaption = el.querySelector('.c-caption');
      const carouselStatus = el.querySelector('.carousel-status');
      
 
      flkty.on( 'select', function() {
        carouselStatus.textContent = flkty.selectedIndex + 1 + '/' + flkty.slides.length;
        carouselCaption.textContent = el.querySelector('.is-selected .caption').textContent ? el.querySelector('.is-selected .caption').textContent : el.querySelector('.carousel-cell:first-child .caption').textContent;
      });

      el.querySelector('.button-previous').addEventListener( 'click', function() {
        flkty.previous();
      });
      // next
      el.querySelector('.button-next').addEventListener( 'click', function() {
        flkty.next();
      });
      

    });
  }


/*
  const slideshow = document.querySelector('.clients');

  if(slideshow) {
    
    const flkty =  new Flickity(slideshow, {
          wrapAround: true,
          pageDots: false,
          draggable: false, //isTouch(),
          prevNextButtons: false,
          cellAlign: 'left',
          on: {
              ready: function() {
                  window.dispatchEvent(new Event('resize'));
              },
          }, 
      });

    // previous
    var previousButton = document.querySelector('.button-previous');
    previousButton.addEventListener( 'click', function() {
      flkty.previous();
    });
    // next
    var nextButton = document.querySelector('.button-next');
    nextButton.addEventListener( 'click', function() {
      flkty.next();
    });
  }
*/

}