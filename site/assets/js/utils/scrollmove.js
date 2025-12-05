//import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';


export default function() {

  if (window.innerWidth < 768) return;

  const scrollEl = document.querySelector('.scrollmove');

  if (!scrollEl) return;

    const container  = scrollEl.parentElement

  // get element widths
  const scrollElWidth = scrollEl.scrollWidth - container.clientWidth;

  scrollEl.animate(
   { transform: ['translateX(0%)','translateX(-' + scrollElWidth + 'px)'] }, {
    timeline: new ViewTimeline({ subject: container }),
    rangeStart: { rangeName: 'contain', offset: CSS.percent(10) },
    rangeEnd: { rangeName: 'contain', offset: CSS.percent(80) },
    fill: 'both',
  });



}
