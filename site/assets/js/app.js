// app.js for concatenation of smaller libraryies
// to reduce http requests of small files
'use strict';

import Swup from 'swup';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupHeadPlugin from '@swup/head-plugin';
//import SwupScrollPlugin from '@swup/scroll-plugin';
//import SwupDebugPlugin from '@swup/debug-plugin';

import starterScripts from "./assets/js/views/starter-scripts";
import onEveryPage from "./assets/js/views/on-every-page";

// Include parts of Bootstrap

import {
  //Alert,
  Button,
  //Carousel,
  Collapse,
  Dropdown,
  Modal,
  Offcanvas,
  //Popover,
  //ScrollSpy,
  //Tab,
  //Toast,
  //Tooltip
} from 'bootstrap';



const swup = new Swup({
  containers: ['#main', '#main-menu', '#top-menu' ],
  ignoreVisit: (url, { el } = {}) => el?.closest('.language-switcher') ,
  //ignoreVisit: (url, { el } = {}) => el?.closest('[data-no-swup]') || el?.closest('#wpadminbar'),
  //native: true,
  plugins: [
    new SwupBodyClassPlugin(),
    new SwupHeadPlugin({ persistAssets: true }),
   /*
    new SwupScrollPlugin({
      //doScrollingRightAway: true,
      //animateScroll: false
    }),
    */
    //new SwupDebugPlugin(),
  ],
});

swup.hooks.on('page:view', (visit) => {
  //console.log('New page loaded:', visit.to.url);
  onEveryPage();
});


  starterScripts();
  onEveryPage();



