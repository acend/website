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

  const carouselCommunity = document.querySelector('.carousel-community');

  if (carouselCommunity) {
        
      var flkty = new Flickity(carouselCommunity, {  
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
      
  
      flkty.on( 'staticClick', function(  ) {
        flkty.selectedIndex == flkty.cells.length - 1  ? flkty.select( 0 ) : flkty.next();
  
      });
    }

  const carouselPartners = document.querySelector('.partner-carousel');
  if (carouselPartners) {
      
      var flkty_partner = new Flickity( carouselPartners, {
          wrapAround: true,
          autoPlay: 5500,
          //pauseAutoPlayOnHover: false,
          prevNextButtons: false,
          cellAlign: 'left',
          on: {
              ready: function() {
                  window.dispatchEvent(new Event('resize'));
              },
          }, 
      });
    }
  
    const carouselClients = document.querySelector('.clients-carousel');
  if (carouselClients) {

    const flkty_clients = new Flickity( carouselClients, {
      wrapAround: true,
      //autoPlay: 0,
      pauseAutoPlayOnHover: false,
      prevNextButtons: false,
      draggable: false,
      pageDots: false,
      cellAlign: 'left',
      on: {
        ready: function() {
          console.log('Flickity ready');
          window.dispatchEvent(new Event('resize'));
        }
      }
    });
    
    // cotinuous ticker:
    const _updateTicker = function() {
      flkty_clients.x = (flkty_clients.x - 0.85) % flkty_clients.slideableWidth;
      flkty_clients.selectedIndex = flkty_clients.dragEndRestingSelect();
      flkty_clients.updateSelectedSlide();
      flkty_clients.settle(flkty_clients.x);
      window.requestAnimationFrame(_updateTicker);
    };
    
    _updateTicker();
     



    }

         

  const carouselTestimonials = document.querySelector('.testimonial-carousel');
  if (carouselTestimonials) {
      
      const flkty_testimonial = new Flickity( carouselTestimonials, {
          wrapAround: true,
          fade: true,
          adaptiveHeight: false,
          autoPlay: 7500,
          pauseAutoPlayOnHover: false,
          prevNextButtons: false,
          on: {
              ready: function() {
                  window.dispatchEvent(new Event('resize'));
              },
          }, 
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
    const previousButton = document.querySelector('.button-previous');
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