// ==UserScript==
// @name        York SSO Autologin
// @namespace   Violentmonkey Scripts
// @match       https://passportyork.yorku.ca/ppylogin/ppylogin
// @grant       none
// @version     1.0
// @author      Judah Goldstein
// @description clicks the login button automaticaly when the SSO page loads, only works if you have autofill on.
// ==/UserScript==

window.onload = function() {
  var button = document.getElementsByName("dologin"); //finds login button
  var username = document.getElementById("mli");      //finds username box
  var password = document.getElementById("password"); //finds password box
  if(username.value != "" && password.value != ""){
    console.log("working!");
    button[0].click();
  } else {
    alert("I'm happy that you have such confidence in my mind reading abilities but this script only works with autofill enabled for your YorkU account's username and password through your browser. if this is a mistake please make an issue on my github at https://github.com/Nexr0n/York-SSO-Autologin");
  }
}
