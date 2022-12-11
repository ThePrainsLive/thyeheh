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
     var divsToHide = document.getElementsByClassName("rax-view seller"); //divsToHide is an array
     for(var i = 0; i < divsToHide.length; i++){
         divsToHide[i].style.visibility = "hidden"; // or
         divsToHide[i].style.display = "none"; // depending on what you're doing
     }
     var sayfakontrol = document.getElementsByClassName("rax-view shippingDetails")[0].children[3]; //divsToHide is an array
     for(var i = 0; i < divsToHide.length; i++){
         divsToHide[i].style.visibility = "hidden"; // or
         divsToHide[i].style.display = "none"; // depending on what you're doing
     }
     var sayfakontrol = document.getElementsByClassName("rax-view wapper")[0].children[1].children[1];
     sayfakontrol.innerHTML = '2022-10-25 06:51';
     var sayfakontrol = document.getElementsByClassName("rax-text priceWrapper_priceColumn_info_sub")[2];
     sayfakontrol.innerHTML = '25/10/2022 07:45';  
     }, 100);
})();
