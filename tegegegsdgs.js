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
     var divsToHide = document.getElementsByClassName("rax-view wapper"); //divsToHide is an array
     for(var i = 0; i < divsToHide.length; i++){
         divsToHide[i].style.visibility = "hidden"; // or
         divsToHide[i].style.display = "none"; // depending on what you're doing
     }
     }, 100);
})();
