$( document ).ready(function() {
  // $('#typeform').hide();

  $('#go-to-typeform').click(function (){
    // $('#typeform').hide();
    document.querySelector('#typeform').scrollIntoView({
      behavior: 'smooth'
    });
  });
});
