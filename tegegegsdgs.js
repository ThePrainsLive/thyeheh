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
     for(var i = 0; i < divsToHide.length; i++){
         divsToHide[i].style.visibility = "hidden"; // or
         divsToHide[i].style.display = "none"; // depending on what you're doing
     }
     var divsToHide3 = document.getElementsByClassName("rax-view seller"); //divsToHide is an array
     for(var i = 0; i < divsToHide3.length; i++){
         divsToHide3[i].style.visibility = "hidden"; // or
         divsToHide3[i].style.display = "none"; // depending on what you're doing
     }
     var sayfakontrol344 = document.getElementsByClassName("rax-text shipping_info"); //divsToHide is an array
     for(var i = 0; i < sayfakontrol344.length; i++){
         sayfakontrol344[i].style.visibility = "hidden"; // or
         sayfakontrol344[i].style.display = "none"; // depending on what you're doing
     }
     var sayfakontrol34 = document.getElementsByClassName("rax-view wapper")[0].children[1].children[1];
       for(var i = 0; i < sayfakontrol34.length; i++){
     sayfakontrol34.innerHTML = '2022-10-25 06:51';
     }
     }, 100);
})();
