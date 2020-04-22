// ==UserScript==
// @name         TWINS Auto Extend
// @namespace    https://twins.tsukuba.ac.jp/
// @version      1.0
// @description  Automatically extend the time limit of 30min in TWINS
// @author       @m_kobayashi_me  https://twitter.com/m_kobayashi_me
// @match        https://twins.tsukuba.ac.jp/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  window.onload = () => {
    const button = document.getElementById("portaltimer")

    const getRemainingTime = () => {
      return Number(document.getElementById("timeout-timer").innerHTML)
    }
    
    const extendlimit = () => {
      button.click()

      if(getRemainingTime() !== 30) {
        window.alert("Failed to auto-extend the limit.")
      }
    }

    window.setInterval(() => {
      extendlimit()
    }, 300000)
  }
})();