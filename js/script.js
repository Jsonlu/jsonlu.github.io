// build time:Sun Apr 30 2017 00:01:22 GMT+0800 (CST)
(function(e,o){var i=i||{init:function(){e(".js-toggle-search").on("click",function(){e(".js-search").toggleClass("is-visible")});e(".js-next a").on("click",function(o){e(infinite_scroll.contentSelector).infinitescroll(infinite_scroll);var i=e("body");i.scrollTop(i.scrollTop()-1);o.preventDefault()});e(o).keydown(function(o){if(o.keyCode==27){if(e(".js-search").attr("class").indexOf("is-visible")>0){e(".js-search").removeClass("is-visible")}}});e(".js-search .text-input").keydown(function(o){if(o.keyCode==13){location.href="https://www.google.com/search?q=site:yumemor.com "+e(this).val();return false}})}};e(i.init);e(function(){var i=e("#nav-toggle"),l=e("nav"),s=l.find("a");i.on("click",function(){i.toggleClass("active");l.toggleClass("open");return false});s.on("click",function(){i.toggleClass("active");l.toggleClass("open")});e(document).on("click",function(){if(l.hasClass("open")){i.toggleClass("active");l.toggleClass("open")}});e(".btn-slide").click(function(){e("#panel").slideToggle("slow");e(this).toggleClass("active");return false});e(o).scroll(function(){var o=e("header");if(e(this).scrollTop()>1){o.addClass("scrolled")}else{o.removeClass("scrolled")}});e("#social-share").click(function(){e("#social").toggleClass("visible").slideToggle(200)});if(e(".welcome")[0]){e(".author-info").hide();e("span.info-edit").click(function(){e(".author-info").toggle()})}var n=e(".top-image");if(n.data("enable")){var t=parseInt(Math.random()*4+1);n.attr("style","background-image:url(/banner/"+t+".jpg)")}})})(jQuery,window);
//rebuild by neat 