!function(n){jQuery(document).ready(function(n){scroll(),hamburger(),navAlt(),navHide(),n(window).scroll(function(){navAlt(),navHide()})})}(jQuery);var scroll=function(){$(".scroll").click(function(n){n.preventDefault(),$("html,body").animate({scrollTop:$(this.hash).offset().top},500)})},hamburger=function(){$(".hamburger-menu").on("click",function(){$(".bar").toggleClass("animate"),$("nav ul.navbar").slideToggle("slow")})},navAlt=function(){var n=$(window).scrollTop(),a=$(window).height();n>a-150?$("nav").addClass("alt"):$("nav").removeClass("alt")},navHide=function(){var n=$(window).scrollTop(),a=$(window).height();n>a/10&&!(n>a-50)||n>1.1*a?$("nav").addClass("hide"):$("nav").removeClass("hide")};