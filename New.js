// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://m.alibaba.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=alibaba.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
   var sattimer1 = setInterval(function () {
     var divsToHide = document.getElementsByClassName("rax-view item_header"); //divsToHide is an array
     for(var a = 0; a < divsToHide.length; a++){
         divsToHide[a].style.visibility = "hidden"; // or
         divsToHide[a].style.display = "none"; // depending on what you're doing
     }
     var divsToHide3 = document.getElementsByClassName("rax-view seller"); //divsToHide is an array
     for(var b = 0; b < divsToHide3.length; b++){
         divsToHide3[b].style.visibility = "hidden"; // or
         divsToHide3[b].style.display = "none"; // depending on what you're doing
     }
     var sayfakontrol344 = document.getElementsByClassName("rax-text shipping_info"); //divsToHide is an array
     for(var c = 0; c < sayfakontrol344.length; c++){
         sayfakontrol344[c].style.visibility = "hidden"; // or
         sayfakontrol344[c].style.display = "none"; // depending on what you're doing
     }
     var sayfakontrol34 = document.getElementsByClassName("rax-view wapper")[0].children[1].children[1];
     sayfakontrol34.innerHTML = '2022-10-25 06:51';
    }, 100);

     var sattimer2 = setInterval(function () {
       var sayfakontrol347 = document.getElementsByClassName("rax-view priceWrapper_priceColumn_info")[1].children[1];
        sayfakontrol347.innerHTML = '25/10/2022 07:25';
}, 100);
})();
