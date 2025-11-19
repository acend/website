export default function() {
   
  if (document.getElementById('scrollDownButton')) {

    document.getElementById('scrollDownButton').addEventListener('click', function(e) {

      console.log('scrollDownButton clicked');

      e.preventDefault();
      e.stopPropagation();
      document.getElementById('start').scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* autoplay ios fix */
document.querySelectorAll('video[autoplay]').forEach( video => {
  video.play();
});

 

}
