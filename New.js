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
       var sayfakontrol347 = document.getElementsByClassName("rax-view priceWrapper_priceColumn_info")[1].children[1];
        sayfakontrol347.innerHTML = '12/09/2021 06:24';
}, 100);
})();
