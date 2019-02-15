import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/tab';
import 'jquery-countdown';

import './jquery.sticky';
import './jquery.magnific-popup';
import './jquery.validate';

$(document).ready(function($){
   window.applyStickyHeader = function(){
      if(window.innerWidth >= 768){
         $('.widget-sticky').sticky({topSpacing:0});
      }else{
         $('.widget-sticky').unstick();
      }
      if(window.innerWidth >= 992) {
         $('.sidebar-widget').sticky({topSpacing:32});
      }else{
         $('.sidebar-widget').unstick();
      }
   }

   $('.photo-gallery').each(function(){
      $(this).magnificPopup({
         delegate: 'a',
         type: 'image',
         gallery: {enabled:true}
      });
   });

   $('.video-link').each(function(){
      $(this).magnificPopup({
         disableOn: 700,
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: false,
         fixedContentPos: false
      });
   });

   $('.carousel').carousel({interval: 4000});
   $(window).resize(function() {
      window.applyStickyHeader();
   });
   window.applyStickyHeader();

   $('.contact-form').validate({
      messages: window.formMessages
   });

   $('[data-countdown]').each(function () {
      var $this = $(this); 
      var finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function (event) {
         var totalHours = event.offset.totalDays * 24 + event.offset.hours;
         if(!event.elapsed && totalHours<=72){
            $this.html(event.strftime(totalHours + 'h %Mm %Ss'));
            $this.parent().removeClass('d-none');
         }
      });
   });

});
