var windows = $('#liuvod, #lidovednosti, #liprojekty, #lizajmy, #kontakt');
var x = window.matchMedia("(max-width: 1100px)")
var menu = document.querySelector(".menu")
var hamburger = document.querySelector(".hamburger")
var aTags = menu.getElementsByTagName('a');
let togglemenu = document.querySelector(".toggle-menu")
let logo = document.querySelector("logo")

  togglemenu.onclick = function openNav() {
    document.getElementById(
        "mySidebar").style.right = "0";
  }
  menu.onclick = function closeNav() {
  let toggleMenu = document.querySelector(".toggle-menu")
    document.getElementById(
        "mySidebar").style.right = "-300px";
    toggleMenu.checked = false;
  }

  