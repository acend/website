//import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

  
export default function() {

  const progress = document.querySelector('.scrollmove');

  if (!progress) return;

  progress.animate([
    { transform: 'translateX(0%)' },
    { transform: 'translateX(-300%)' }
  ], {
    timeline: new ScrollTimeline({
      source: document.documentElement
    })
  });


 
}