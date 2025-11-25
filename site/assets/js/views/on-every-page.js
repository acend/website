
import ScrollOut from "scroll-out";
//import Sticky from "sticky-js";

import home from "js/views/home";
import trainings from "js/views/trainings";
import about from "js/views/about";
import faq from "js/views/faq";
import Slideshows from "js/utils/slideshows";
import Scrollmove from "js/utils/scrollmove";
import ScrollText from "js/utils/scrolltext";
import imageclouds from "js/utils/imageclouds";
import formsNetlify from "js/utils/forms-netlify";

// lazy sizes for image loading
import 'lazysizes';

//import { Popover } from 'bootstrap';


export default function() {

  ScrollOut({
    /* options */
    once: true,
  });



  const root = document.documentElement;
  const colors = [
    "7 71 97", //#E6ECEE", //AC-Blue
    "125 15 75", //#E8D4DF", //AC-Red
    "54 115 92", //#36735c //AC-Green
    "208 143 76", //#F6E8DB", //AC-Yellow
  ];
  const colors_medium = [
      "193 209 215",        //AC-Blue - light
      "227 135 186",        //AC-Red - light
      "172 200 189",         //AC-Green - light
      "229 209 190",         //AC-Yellow - light
          ];
  const colors_light = [
      "230 236 238",        //AC-Blue - light
      "232 212 223",        //AC-Red - light
      "230 237 234",         //AC-Green - light
      "246 232 219",         //AC-Yellow - light
          ];


  const currentColor = root.style.getPropertyValue('--primary').replace('rgb(', '').replace(')', '');
  //console.log("currentColor " + root.style.getPropertyValue('--primary').replace('rgb(', '').replace(')', ''));
  let newRandomColor;
  do {
    newRandomColor = Math.floor(Math.random() * colors.length);
  } while (colors[newRandomColor] === currentColor);

  root.style.setProperty('--bs-body-color', 'rgb('+colors[newRandomColor]+')');
  root.style.setProperty('--primary', 'rgb('+colors[newRandomColor]+')');
  root.style.setProperty('--primary-medium', 'rgb('+colors_medium[newRandomColor]+')');
  root.style.setProperty('--primary-light', 'rgb('+colors_light[newRandomColor]+')');
  root.style.setProperty('--shadowColor', 'rgba('+colors[newRandomColor].split(' ').join(',')+', 0.3)');
  root.style.setProperty('--primary-opaque', 'rgba('+colors[newRandomColor].split(' ').join(',')+', 0.96)');
  root.style.setProperty('--primary-opaque-light', 'rgba('+colors_light[newRandomColor].split(' ').join(',')+', 0.75)');




  imageclouds();
  Scrollmove();
  ScrollText();
  Slideshows();
  home();
  trainings();
  about();
  faq();
  formsNetlify();







  // still needed?
/*
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

  if (popoverTriggerList) {
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new Popover(popoverTriggerEl));
  }
*/



}



