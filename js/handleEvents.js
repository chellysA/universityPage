$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    const isCollapsedMenu =
      $(".navbar-toggler").attr("aria-expanded") === "false";

    if (!isCollapsedMenu) {
      return;
    }

    if (scroll > 50) {
      $("#header").removeClass("bg-primary").addClass("bg-white");
      $("#header")
        .find(".text-white")
        .removeClass("text-white")
        .addClass("text-primary");
      $("#navbar").addClass("bg-primary");
    } else {
      $("#header").addClass("bg-primary").removeClass("bg-white");
      $("#header")
        .find(".text-primary")
        .removeClass("text-primary")
        .addClass("text-white");
      $("#navbar").removeClass("bg-primary");
    }
  });

  $("#our-team-container").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    variableWidth:false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          autoplay:true,
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth:false,
          dots: true,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          fade: true
        }
      }
    ]
  });

  $("#reviews-container").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: true,
    pauseOnHover: false,
  });

  $("#modal-video").on("show.bs.modal", function (e) {
    var video = $(".review-video").get(0);
    video.currentTime = 0;
    video.play();
  });

  $(".navbar-toggler").click(function () {
    const isCollapsedMenu =
      $(".navbar-toggler").attr("aria-expanded") === "false";

    if (isCollapsedMenu) {
      $("#header").removeClass("bg-primary").addClass("bg-white");
      $("#header")
        .find(".text-white")
        .removeClass("text-white")
        .addClass("text-primary");
      $("#navbar").addClass("bg-primary");
    } else {
      $("#header").addClass("bg-primary").removeClass("bg-white");
      $("#header")
        .find(".text-primary")
        .removeClass("text-primary")
        .addClass("text-white");
      $("#navbar").removeClass("bg-primary");
    }
  });

  $('a[href^="#"]').click(function (event) {
    console.log("entro")
    event.preventDefault();
    var isMobile = $(window).width() < 992;
    var isCollapsedMenu =
      $(".navbar-toggler").attr("aria-expanded") === "false";
    var addPx = isCollapsedMenu || !isMobile ? 130 : 250;
    var ancla = this.hash;
    var desplazamiento = $(ancla).offset().top - addPx;

    window.scrollTo({ top: desplazamiento, behavior: "smooth" });
  });

  $(".play-button").click(function () {
    var name = $(this).data("name");

    $("#modal-video").addClass("show");
    $("#modal-title").html(name);
  });
});
