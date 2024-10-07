  
export default function() {

    /**
   * Select all the messages
   * @type {NodeList}
   */
    const messages = document.querySelectorAll('.marquee__inner');


  if (!messages) return;



  /**
   * The speed in time (in milliseconds) of a single pixel.
   * Changing this value will change the speed.
   * @type {number}
   */
  let timePerPixel = 3;

  /**
   * Width of the container.
   * Hardcoded for simplicity' sake.
   * @type {number}
   */
  const containerWidth = window.innerWidth;


  /**
   * For each message, calculate the duration based on the lenght of the message.  
   * Then set the animation-duration of the animation.
   */
  messages.forEach(message => {
    const messageWidth = message.offsetWidth;
    const distance = messageWidth + containerWidth;
    const duration = timePerPixel * distance;

    message.style.setProperty('--speed', `${duration}ms`);
  });


  /**
   * Update the duration of the animation based on the scroll speed.
   *
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    let scrollSpeed = Math.abs(window.scrollY - lastScrollY);
    lastScrollY = window.scrollY;

    console.log(scrollSpeed);

    timePerPixel = 3 - (scrollSpeed / 100);

    messages.forEach(message => {
      const messageWidth = message.offsetWidth;
      const distance = messageWidth + containerWidth;
      const duration = timePerPixel * distance;

      message.style.setProperty('--speed', `${duration}ms`);
    });
  });

  */

}