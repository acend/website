// app.js for concatenation of smaller libraryies
// to reduce http requests of small files
'use strict';

//import 'bootstrap';
//import Popper from "@popperjs/core";

//import 'jquery';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import Swup from 'swup';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupDebugPlugin from '@swup/debug-plugin';

import ScrollOut from "scroll-out";
 
import onEveryPage from "./assets/js/views/on-every-page";
 
 

 


ScrollOut({
  targets: ".banner",
  offset: 100
});

 

 

const swup = new Swup({
  containers: ['#main', '.banner nav' ],
  //ignoreVisit: (url, { el } = {}) => el?.closest('[data-no-swup]') || el?.closest('#wpadminbar'),
  plugins: [
    new SwupBodyClassPlugin(),
    new SwupHeadPlugin({ persistAssets: true }),
    new SwupDebugPlugin(),
  ],
});

swup.hooks.on('page:view', (visit) => {
  console.log('New page loaded:', visit.to.url);
  onEveryPage();
});


(function ($) {
'use strict';


  onEveryPage();
  
  


  $('#signupModal').on('show.bs.modal', function (e) {

    $('body').addClass('signup-modal');

    const selectedTraining = e.relatedTarget.dataset.kurs;
    if(selectedTraining){
      $(this).find('.custom-select option[value="'+selectedTraining+'"]').prop('selected', true);
    }

  }).on('hidden.bs.modal', function (e) {
    $('body').removeClass('signup-modal');
  });

    

  /* ########################################### /hero parallax ############################################## */



  /* FORMULAR : for gold only */


  $( 'form' ).submit(function ( e ) {

  const $form = $(this);
  const formdata = $form.serializeArray();

  $.ajax({
    url:  $form.attr("action"),
    method: "POST",
    dataType: "json",
    data: formdata,
    success: function (msg) {

      //console.log(msg);

      if (msg.ok == true) {


            if (($form.attr('id') === "signupModal") || ($form.attr('id') === "newsletterform")) {
              $form.replaceWith("<p>Danke für deine Anmeldung.</p>");
            }else {
              $form.replaceWith("<p>Danke für deine Nachricht.</p>");

            }



      } else {

          alert(msg );
      }


  }
  });

  e.preventDefault();
  });







})(jQuery);
