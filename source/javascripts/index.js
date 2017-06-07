$( document ).ready(function() {
  $('#go-to-typeform').click(function (){
    document.querySelector('#typeform').scrollIntoView({
      behavior: 'smooth'
    });
  });

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
