//import  Flickity from 'flickity-fade';
export default function() {
   
  const faqCollapsible = document.querySelectorAll('.collapse');
  if(faqCollapsible) {
    
    faqCollapsible.forEach(el => {
      el.addEventListener('show.bs.collapse', event => {
        console.log('collapse')
      });
    });
  }
}
