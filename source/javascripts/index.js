$( document ).ready(function() {
  $('#go-to-typeform').click(function (){
    document.querySelector('#typeform').scrollIntoView({
      behavior: 'smooth'
    });
  });
});
