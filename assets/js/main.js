"use strict";

let theme = document.getElementById("theme").addEventListener("click", () => {
  changeTheme();
});

function changeTheme() {
  let type = document.getElementById("theme").value;

  if (type == "light") {
    // colores tema light
    document.documentElement.style.setProperty("--first-color", "#03ba55");
    document.documentElement.style.setProperty("--dark-color", "#deddda3f");
    document.documentElement.style.setProperty("--dark-color-alt", "#71f0ac38");
    document.documentElement.style.setProperty("--white-color", "#29272e");

    /* === Colors Divs === */
    document.documentElement.style.setProperty(
      "--section-color-b",
      "#dedddaea"
    );
    document.documentElement.style.setProperty("--section-color-a", "#161221");
    document.documentElement.style.setProperty("--mydiv-color", "#00000023");
    document.documentElement.style.setProperty("--nav-color", "#dedddaea");

    document.getElementById("theme").value = "dark";
    setVideo(type);
  } else {
    // colores tema Dark
    document.documentElement.style.setProperty("--first-color", "#33d17a");
    document.documentElement.style.setProperty("--dark-color", "#241f31ee");
    document.documentElement.style.setProperty("--dark-color-alt", "#26a269");

    document.documentElement.style.setProperty("--white-color", "#ffffff");

    document.documentElement.style.setProperty("--section-color-b", "#221b34");
    document.documentElement.style.setProperty("--section-color-a", "#161221");

    document.documentElement.style.setProperty("--mydiv-color", "#070707d9");
    document.documentElement.style.setProperty("--nav-color", "#241f31ee");

    document.getElementById("theme").value = "light";
    setVideo(type);
  }
}

function setVideo(v) {
  let video = document.getElementById("video");

  let source1 = document.getElementById("v-mp4");
  let source2 = document.getElementById("v-ogg");
  let source3 = document.getElementById("v-webm");

  let ruta_mp4 = "assets/video/" + v + ".mp4";
  let ruta_ogg = "assets/video/" + v + ".ogg";
  let ruta_webm = "assets/video/" + v + ".webm";

  source1.setAttribute("src", ruta_mp4);
  source2.setAttribute("src", ruta_ogg);
  source3.setAttribute("src", ruta_webm);

  video.appendChild(source1);
  video.appendChild(source2);
  video.appendChild(source3);

  video.load();
}

/**==================================================================== */

/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

/*SHOW*/
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

/*HIDDEN*/
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/**==================================================================== */
