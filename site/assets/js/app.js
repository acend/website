// app.js for concatenation of smaller libraryies
// to reduce http requests of small files
'use strict';

import Swup from 'swup';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupHeadPlugin from '@swup/head-plugin';
//import SwupDebugPlugin from '@swup/debug-plugin';
 
import onEveryPage from "./assets/js/views/on-every-page";
 


const swup = new Swup({
  containers: ['#main', '#main-menu', '#top-menu' ],
  ignoreVisit: (url, { el } = {}) => el?.closest('.language-switcher') ,
  //ignoreVisit: (url, { el } = {}) => el?.closest('[data-no-swup]') || el?.closest('#wpadminbar'),
  plugins: [
    new SwupBodyClassPlugin(),
    new SwupHeadPlugin({ persistAssets: true }),
    //new SwupDebugPlugin(),
  ],
});

swup.hooks.on('page:view', (visit) => {
  console.log('New page loaded:', visit.to.url);
  onEveryPage();
});



  onEveryPage();
  
  


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
