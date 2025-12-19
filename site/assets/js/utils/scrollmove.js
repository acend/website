import { animate, onScroll } from 'animejs';


export default function() {

    const scrollEl = document.querySelector('.scrollmove');
    if (!scrollEl) return;

    if (window.innerWidth < 768) return;

    const container = scrollEl.parentElement;
    let scrollElWidth = scrollEl.scrollWidth - container.clientWidth;

    const animation = animate(scrollEl, {
      x: `-${scrollElWidth}px`,
      ease: 'linear',
      autoplay: onScroll({
        container: '.scroll-container',
        enter: 'bottom-=50 bottom',
        leave: 'top+=100 top',
        sync: .9,
        //debug: true,
      })
    });

    // Update on resize
  const recalculateWidth = () => {
    scrollElWidth = scrollEl.scrollWidth - container.clientWidth;
    animation.refresh();
  };
  window.addEventListener('resize', recalculateWidth);

}
