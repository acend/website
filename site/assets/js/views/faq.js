import  Flickity from 'flickity';

export default function() {

  
  const $stickyTop = document.querySelector('.sticky-top');

  if ($stickyTop) {
    console.log('$stickyTop');
    
    const observer = new IntersectionObserver( 
      ([e]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 0.5),
      {threshold: [1]}
      
      );
      
      observer.observe($stickyTop);
    }


    function scrollTo(el) {
      // An offset to push the content down from the top.
      var offset = 200;

      var target = document.querySelector(el).offsetTop - offset;

      window.scrollTo({
        top: target,
        behavior: 'smooth'
      });

      //prevent the page from jumping down to our section.
      window.location.hash = el;
    }




  if (document.querySelectorAll('.topic-selector').length) {
    document.querySelectorAll('.topic-selector').forEach(function (el) {
      el.addEventListener('change', function (e) {
        var val = this.value;

        if (val) {
          scrollTo(val);
        } else {
          var noHashURL = window.location.href.replace(/#.*$/, '');
          window.history.replaceState('', document.title, noHashURL);
        }
        e.preventDefault();
      });
    });

    //activate filter on pageload with hash
    if (location.hash) {
      scrollTo(location.hash);
    }
  }



 
  
  const faqCollapsible = document.querySelectorAll('.faq-content .collapse');
  if(faqCollapsible) {
    
    faqCollapsible.forEach(el => {
      el.addEventListener('show.bs.collapse', event => {
        console.log('collapse')
        window.dispatchEvent(new Event('resize'));
      });
    });
  }
  
  
}