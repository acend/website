import  Flickity from 'flickity';
//import anime from 'animejs'; // old home slider

export default function() {

  const articleSlideshows = document.querySelectorAll('.entry-content .slides');

  if (articleSlideshows) {

    articleSlideshows.forEach((el) => {

      var flkty = new Flickity(el.querySelector('.carousel'), {
        //lazyLoad: 2,
        prevNextButtons: true,
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




    });
  }

  const carouselCommunity = document.querySelector('.carousel-community');

  if (carouselCommunity) {

      var flkty = new Flickity(carouselCommunity, {
        //lazyLoad: 2,
        prevNextButtons: true,
        pageDots: false,
      //	autoPlay: $this.hasClass('auto-play') ? 3000 : false,
        wrapAround: false ,
        cellAlign: 'left',
        adaptiveHeight: true,
        on: {
          ready: function() {
            //console.log('Flickity ready');
            window.dispatchEvent(new Event('resize'));
          }
        }
      });

      let lastSlide = 3;

      flkty.on( 'change', function( index ) {


        lastSlide = window.innerWidth > 1500 ?  3 : (window.innerWidth > 1200 ?  2 : (window.innerWidth > 768 ?  2  : 1));

       // console.log(flkty.cells.length,lastSlide,flkty.selectedIndex);
        //console.log(flkty.cells.length - lastSlide,flkty.selectedIndex);

        if (flkty.cells.length - lastSlide  <= flkty.selectedIndex) {
          carouselCommunity.querySelector('.flickity-prev-next-button.next').classList.add('d-none');
        }else {
          carouselCommunity.querySelector('.flickity-prev-next-button.next').classList.remove('d-none');
        }
      });

      /*
      flkty.on( 'staticClick', function( event, pointer ) {
        var pWidth = this.element.clientWidth;
        var x = pointer.pageX - this.element.offsetLeft;


        if(pWidth/2 > x) {
          flkty.selectedIndex == 0  ? flkty.select( flkty.cells.length - lastSlide ) : flkty.previous();
        } else {
          flkty.selectedIndex >= flkty.cells.length - lastSlide  ? flkty.select( 0 ) : flkty.next();
        }

			});
      */


    }

  const carouselPartners = document.querySelector('.partner-carousel');
  if (carouselPartners) {

      // Duplicate elements if less than 7
      const cells = carouselPartners.querySelectorAll('.partner');
      if (cells.length < 7) {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 7 - cells.length; i++) {
          const clone = cells[i % cells.length].cloneNode(true);
          fragment.appendChild(clone);
        }
        carouselPartners.appendChild(fragment);
      }


      var flkty_partner = new Flickity( carouselPartners, {
          wrapAround: true,
          //autoPlay: 2000,
          pauseAutoPlayOnHover: true,
          prevNextButtons: false,
          pageDots: false,
          cellAlign: 'left',
          on: {
              ready: function() {
                  window.dispatchEvent(new Event('resize'));
              },
          },
      });

       // continuous ticker:

    let speed = 0.85;

    carouselPartners.addEventListener('mouseenter', function() {
      speed = 0;
    });
    carouselPartners.addEventListener('mouseleave', function() {
      speed = 0.85;
    });

    const _updateTicker2 = function() {
      flkty_partner.x = (flkty_partner.x - speed) % flkty_partner.slideableWidth;
      flkty_partner.selectedIndex = flkty_partner.dragEndRestingSelect();
      flkty_partner.updateSelectedSlide();
      flkty_partner.settle(flkty_partner.x);
      window.requestAnimationFrame(_updateTicker2);
    };

    _updateTicker2();

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
          //console.log('Flickity ready');
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
