$(document).ready(function () {
  var isTop = true;
  var menuIsOpen = false;

  var menuIcon = $(".va_menu_icon");
  var iconCover = $(".icover");

  var one = $("#one");
  var two = $("#two");
  var three = $("#three");
  var four = $("#four");

  menuIcon.click(function () {
    screenSize(x);

    if (isTop === true) {
      $("#nav").animate({ top: "50%", left: "50%" }, 400);
      $(".content").animate({ opacity: "0" }, 700);
      $(".banner").animate({ opacity: "1" }, 1600);
      showBubbles();
      isTop = false;
    } else {
      if (menuIsOpen === false) {
        showBubbles();
      } else {
        hideBubbles();
        $(".social").animate({ opacity: "0" }, 200);
      }
    }
  });

  iconCover.attr("id", "btncover");

  function showBubbles() {
    menuIcon.addClass("is-active");
    iconCover.attr("id", "nocover");
    // screenWide(y);

    $(".social").animate({ opacity: "1" }, 700);

    one.animate({ opacity: "1" }, 10);
    two.animate({ opacity: "1" }, 10);
    three.animate({ opacity: "1" }, 10);
    four.animate({ opacity: "1" }, 10);

    one.animate({ left: "130px" }, 110);
    two.animate({ top: "140px" }, 200);
    one.animate({ left: "130px" }, 100);
    three.animate({ left: "-65px" }, 300);
    two.animate({ top: "130px" }, 210);
    four.animate({ top: "-65px" }, 400);
    three.animate({ left: "-55px" }, 310);
    four.animate({ top: "-55px" }, 400);

    menuIsOpen = true;
  }

  function hideBubbles() {
    menuIcon.removeClass("is-active");
    iconCover.attr("id", "btncover");
    // screenType(y);

    setTimeout(function () {
      $("#nav").animate({ top: "100px", left: "100px" }, 400);
      $(".content").animate({ opacity: "1" }, 900);
      $(".banner").animate({ opacity: "0" }, 700);
    }, 600);
    four.animate({ top: "140px", opacity: "0" }, 350);
    three.animate({ left: "140px", opacity: "0" }, 350);
    two.animate({ top: "-65px", opacity: "0" }, 250);
    one.animate({ left: "-80px", opacity: "0" }, 250);
    four.animate({ top: "65%" }, 400);
    three.animate({ left: "50%" }, 350);
    two.animate({ top: "50%" }, 300);
    one.animate({ left: "50%" }, 250);

    menuIsOpen = false;
    isTop = true;
  }

  $(".bubble").click(function () {
    menuIcon.removeClass("is-active");
    hideBubbles();
    setTimeout(function () {
      $("#nav").animate({ top: "100px", left: "100px" }, 400);
    }, 800);
    isTop = true;
  });

  one.click(function () {
    moveToPage("0", "100vw", "-100vw", "-100vw");
  });

  two.click(function () {
    moveToPage("100vw", "0", "-100vw", "-100vw");
  });

  three.click(function () {
    moveToPage("100vw", "100vw", "0", "-100vw");
  });

  four.click(function () {
    moveToPage("100vw", "100vw", "-100vw", "0");
    $(".social").animate({ opacity: "1" }, 200);
  });

  function moveToPage(firstLeft, secondTop, thirdLeft, fourthTop) {
    $(".first").animate({ left: firstLeft }, 400);
    $(".second").animate({ top: secondTop }, 400);
    $(".third").animate({ left: thirdLeft }, 400);
    $(".start").animate({ top: fourthTop }, 400);
    $(".social").animate({ opacity: "0" }, 700);
    isTop = true;
  }

  function screenSize(x) {
    if (x.matches) {
      // If media query matches
      $("#nav").animate({ top: "20%", left: "50%" }, 400);
    }
  }

  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 640px)");

  // Call listener function at run time

  // Attach listener function on state changes
  x.addEventListener("change", function () {
    screenSize(x);
  });
});
