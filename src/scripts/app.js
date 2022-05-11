"use strict";

import { Splide } from "@splidejs/splide";

var date = new Date();
document.querySelector('.footer__copyright').innerHTML = "&copy" + date.getFullYear();

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('.slide', {
        type: 'loop',
        drag:true,
        perPage: 1,
        focus: 'center',
        autoplay: false,
        flickMaxPages: 1,
        flickPower:300,
        updateOnMove: true,
        pagination: true,
        padding: '10%',
        throttle: 300,
        dragMinThreshold: {
            mouse: 10,
            touch: 10,
          },
        breakpoints: {
          640: {
            perPage: 1,
          },
      }
    }).mount();

});
