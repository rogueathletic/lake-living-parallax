$(document).ready(function() {
  $("#header-copy").show(311);
  $("#bulk-clouds").show();

  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    var Scroll = $(window).scrollTop();

    $("#first-parallax__layer").css({
      transform: "translate(0px, -" + wScroll / 9999999960 + "%)"
    });

    $("#second-parallax__layer").css({
      transform: "translate(0px, -" + wScroll / 4000 + "%)"
    });

    $("#third-parallax__layer").css({
      transform: "translate(0px, -" + wScroll / 100 + "%)"
    });

    $("#fourth-parallax__layer").css({
      transform: "translate(0px, -" + wScroll / 130 + "%)"
    });

    $("#fifth-parallax__layer").css({
      transform: "translate(0px, -" + wScroll / 130 + "%)"
    });

    $("#sixth-parallax__layer").css({
      transform: "translate(0px, -" + wScroll / 110 + "%)"
    });

    $("#seventh-parallax__layer").css({
      transform: "translate(0px, -" + wScroll / 160 + "%)"
    });

    $("#eigth-parallax__layer").css({
      transform: "translate(0px, -" + wScroll / 90 + "%)"
    });

    $("#cloudsOne").css({
      transform: "translate(0px, -" + wScroll / 20 + "%)"
    });

    $("#cloudsTwo").css({
      transform: "translate(0px, -" + wScroll / 20 + "%)"
    });

    $("#bottom").css({
      transform: "translate(0px, -" + wScroll / 178 + "%)"
    });



    if (wScroll > $(".cta-cards").offset().top - $(window).height()) {
      var offset = Math.min(
        0,
        wScroll - $(".cta-cards").offset().top + $(window).height() - 475
      );

      $(".card1").css({
        transform: "translate(" + offset + "px, " + Math.abs(offset * 0) + "px)"
      });

      // $('.card2').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 10) +'px)'});

      $(".card3").css({
        transform:
          "translate(" +
          Math.abs(offset) +
          "px, " +
          Math.abs(offset * 0) +
          "px)"
      });
    }

    if (Scroll > 450) {
      $("#menu-icon").css("filter", "invert(80%)");
    }

    if (Scroll < 450) {
      $("#menu-icon").css("filter", "invert(0%)");
    }

    if (Scroll > 640) {
      $("#sumit-title").css("filter", "invert(80%)");
    }

    if (Scroll < 640) {
      $("#sumit-title").css("filter", "invert(0%)");
    }
  });
});
