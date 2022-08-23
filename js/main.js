$(document).ready(function() {
   $(window).scroll(function(event){
      var s=$(this).scrollTop();
      var w=$(this).outerWidth();
      var h=$('.content').outerHeight();
      var h_b=$('.page1').outerHeight();
      var p=s/h*10;
      var p_b=s/h_b*10;
      var o=1-1/10*p_b;

      var z_5=1+(w/10000*p_b);
      $('.img2').css('transform','scale('+z_5+')');
      $('.img2').css('opacity',o);

      var z_6=1+(w/10000*p_b);
      $('.img0').css('transform','scale('+z_6+')');
      $('.img0').css('opacity',o);
   });
});