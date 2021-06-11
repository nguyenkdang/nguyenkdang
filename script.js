$(document).ready(function() {

  $("#me-right").click(function() {
    if($("#me-right").hasClass("back")){
      $('#me-right').toggleClass('front');
      $('#me-right').toggleClass('back');
      $('#me-left').toggleClass('front');
      $('#me-left').toggleClass('back');
      //Right
      $('.mrBack-B').toggleClass('mrBack-F');
      $('.mrSqr-B').toggleClass('mrSqr-F');
      $('.mrCrc-B').toggleClass('mrCrc-F');
      $('.mrBar-B').toggleClass('mrBar-F');
      $('.mr-CrcBr-B').toggleClass('mr-CrcBr-F');
      $('.mrTrg-B').toggleClass('mrTrg-F');
      $('.mriTrg-B').toggleClass('mriTrg-F');
      $('.mrt1-B').toggleClass('mrt1-F');
      $('.mrt2-B').toggleClass('mrt2-F');

      $('.mr-shadow-B').toggleClass('mr-shadow-F');
      $('.mright-para-B').toggleClass('mright-para-F');

      //Left
      $('.mlBack-B').toggleClass('mlBack-F');
      $('.mlt1-B').toggleClass('mlt1-F');
      $('.mlt2-B').toggleClass('mlt2-F');
      $('.mleft-para-B').toggleClass('mleft-para-F');
      $('.ml-shadow-B').toggleClass('ml-shadow-F');
    }
    
  });

  $("#me-left").click(function() {
    if($("#me-left").hasClass("back")){
      $('#me-right').toggleClass('front');
      $('#me-right').toggleClass('back');
      $('#me-left').toggleClass('front');
      $('#me-left').toggleClass('back');
      //Right
      $('.mrBack-B').toggleClass('mrBack-F');
      $('.mrSqr-B').toggleClass('mrSqr-F');
      $('.mrCrc-B').toggleClass('mrCrc-F');
      $('.mrBar-B').toggleClass('mrBar-F');
      $('.mr-CrcBr-B').toggleClass('mr-CrcBr-F');
      $('.mrTrg-B').toggleClass('mrTrg-F');
      $('.mriTrg-B').toggleClass('mriTrg-F');
      $('.mrt1-B').toggleClass('mrt1-F');
      $('.mrt2-B').toggleClass('mrt2-F');
      $('.mr-shadow-B').toggleClass('mr-shadow-F');
      $('.mright-para-B').toggleClass('mright-para-F');

      //Left
      $('.mlBack-B').toggleClass('mlBack-F');
      $('.mlt1-B').toggleClass('mlt1-F');
      $('.mlt2-B').toggleClass('mlt2-F');
      $('.mleft-para-B').toggleClass('mleft-para-F');
      $('.ml-shadow-B').toggleClass('ml-shadow-F');

    }
  });

  


});
