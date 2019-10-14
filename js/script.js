$(document).ready(function() {
   $('#slides').superslides({
      animation:'fade',
      play:5000 ,
      pagination:false
   });


   //auto writer


 var typed = new Typed(".typed",{
   strings:["Software Developer" ," Web Developer"],
   typeSpeed:70,
   loop:true,
   startDelay:1000,
   showCursor:false
 });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }

    });


//countUP numbers



    $(".counter").each(function () {
        var element = $(this);
        var endVal =parseInt(element.text());
        element.countup(endVal);
    })
    var statsTopOffset = $(".statsSection").offset().top;
    var coutUpFinished = false;
    $(window).scroll((function () {
        if(!coutUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200){
            $(".counter").each(function () {
                var element = $(this);
                var endVal =parseInt(element.text());
                element.countup(endVal);
            })
            coutUpFinished = true;
        }
    }))
  $("[data-fancybox]").fancybox();



    //filter images


    $("#filters a").click(function () {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");
        $(".items").isotope({
            filter:selector,
            animationOptions:{
                duration:1500,
                easing:'linear',
                queue:false
            }
        });
        return false;
    })


    //stiky navbar


    const nav = $  ("#navigation");
    const  navTop = nav.offset().top;

    $(window).on("scroll", stikyNavigation);
    function stikyNavigation() {
        var  body = $("body");

        if($(window).scrollTop() >= navTop){
            body.addClass("fixedNav");
        }
        else{
            body.removeClass("fixedNav");
        }
    }
    // smooth jump to the section
    $("#navigation li a").click(function (e) {
         e.preventDefault();
         var targetElement = $(this).attr("href");
         var targetPosition = $(targetElement).offset().top;
         $("html,body").animate({scrollTop:targetPosition },"slow");
        
    });

    // hide loader

});
