/* CESGEN code pages: mobile menu toggle only. No third-party code, no tracking, no cookies. */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");
  var btn = document.querySelector(".menu-btn");
  var nav = document.querySelector("nav.main");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();
