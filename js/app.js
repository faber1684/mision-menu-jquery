$(document).ready(function(){
    $('a').mouseover(function (e){
       e.preventDefault();
       $(this).css('color', '#EA178C');
    });
    $('a').click(function (e){
       e.preventDefault();
       if($('a').hasClass('active')){
         $('a').removeClass('active');
         $('a').css('color', '#000'); 
       }
       $(this).addClass('active');
       $(this).css('color', '#EA178C')
    });
    $('a').mouseleave(function (e){
       e.preventDefault();
       if(!($(this).hasClass('active'))){
         $(this).css('color', '#000');
       }
    });
  });