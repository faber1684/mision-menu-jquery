$(document).ready(function(){
    $('a').mouseover(function (e){
       e.preventDefault();
       $(this).css('color', '#EA178C');
    });
    $('a').click(function (e){
       e.preventDefault();
       //Aquí falta el if
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