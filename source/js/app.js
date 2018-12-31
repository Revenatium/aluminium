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
         $('.widget-horizontal .widget-container').sticky({topSpacing:0});
      }else{
         $('.widget-horizontal .widget-container').unstick();
      }
   }

   $('.photo-gallery').each(function(){
      $(this).magnificPopup({
         delegate: 'a',
         type: 'image',
         gallery: {enabled:true}
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
