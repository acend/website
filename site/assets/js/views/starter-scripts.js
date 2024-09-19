import Headroom from 'headroom.js'; 


export default function() {

    /* Headroom */
    var myElement = document.querySelector('.banner');
    var headroom  = new Headroom(myElement, {tolerance : 5, offset : 10,});
    headroom.init();
   
    

    /* Mobile Menu */
    const myOffCanvas = document.getElementById('offcanvasMenu');
    const body = document.querySelector('body');

    myOffCanvas.addEventListener('show.bs.offcanvas', () => body.classList.add('menu-open') );
    myOffCanvas.addEventListener('hidden.bs.offcanvas', () => body.classList.remove('menu-open') );


/* Signup Modal */
  document.getElementById('signupModal').addEventListener('show.bs.modal', function (e) {
    document.body.classList.add('signup-modal');

    const selectedTraining = e.relatedTarget.dataset.kurs;
    if (selectedTraining) {
      const options = this.querySelectorAll('.custom-select option');
      options.forEach(option => {
        if (option.value === selectedTraining) {
          option.selected = true;
        }
      });
    }
  });

  document.getElementById('signupModal').addEventListener('hidden.bs.modal', function (e) {
    document.body.classList.remove('signup-modal');
  });

    

 


  /* FORMULAR : for gold only */


  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = this;
    const formData = new FormData(form);

    fetch(form.getAttribute('action'), {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.ok === true) {
          if (form.id === 'signupModal' || form.id === 'newsletterform') {
            form.outerHTML = '<p>Danke für deine Anmeldung.</p>';
          } else {
            form.outerHTML = '<p>Danke für deine Nachricht.</p>';
          }
        } else {
          alert(data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  });

}