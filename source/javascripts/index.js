$( document ).ready(function() {
  var qs,js,q,s,d=document;
  var gi=d.getElementById, ce=d.createElement;
  var gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/";
  if(!gi.call(d,id)){
    js=ce.call(d,"script");
    js.id=id;
    js.src=b+"embed.js";
    q=gt.call(d,"script")[0];
    q.parentNode.insertBefore(js,q)
  }

  $('.slide-next').click(function(){
    var activeSlide = $('li.active');
    activeSlide.removeClass('active').addClass('hidden');
    var nextSlide = activeSlide.next();
    if (nextSlide.length == 1) {
      activeSlide.next().removeClass('hidden').addClass('active').show();
    } else {
      $('#slides li:first-child').removeClass('hidden').addClass('active').show();
    }
  });

  $('.slide-previous').click(function(){
    var activeSlide = $('li.active');
    activeSlide.removeClass('active').addClass('hidden');
    var previousSlide = activeSlide.prev();
    if (previousSlide.length == 1) {
      activeSlide.prev().removeClass('hidden').addClass('active').show();
    } else {
      $('#slides li:last-child').removeClass('hidden').addClass('active').show();
    }
  });

});
