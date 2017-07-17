$( document ).ready(function() {

  // typeform js
  (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()

  $(window).on('scroll', function(event){
    if (event.originalEvent.pageY > 50){
      $('header').slideDown();
    };
    if (event.originalEvent.pageY < 10){
      $('header').slideUp();
    };
  });
});
