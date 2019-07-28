function init() {
  const menuControl = document.getElementById("menu_control");
  const hb = document.querySelector(".hb");
  hb.addEventListener("click", () => {
    if (!menuControl.checked) {
      $(".pages a").css({ visibility: "hidden", opacity: 0 });
      setTimeout(navOpen, 1000);
    } else navClose();
  });
}

function navOpen() {
  $("nav a").css({ visibility: "visible" });
  TweenMax.staggerFromTo(
    ".pages a",
    1,
    { x: -60, opacity: 0, ease: Power0.easeNone },
    { x: 0, opacity: 1, ease: Power0.easeNone },
    0.5
  );
  $(".nav_logoText").css({ filter: "blur(0)", opacity: 1 });
}

function navClose() {
  $(".pages a").css({ visibility: "hidden" });
  $(".nav_logoText").css({ filter: "blur(8px)", opacity: 0 });
}

window.onload = init;
