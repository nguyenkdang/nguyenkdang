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
      $('.circuit-B').toggleClass('circuit-F');
      $('.mlBack-B').toggleClass('mlBack-F');
      $('.mlt1-B').toggleClass('mlt1-F');
      $('.mlt2-B').toggleClass('mlt2-F');
      $('.mleft-para-B').toggleClass('mleft-para-F');
      $('.ml-shadow-B').toggleClass('ml-shadow-F');
      $('.mlCrc1-B').toggleClass('mlCrc1-F');
      $('.mlCrc2-B').toggleClass('mlCrc2-F');
      $('.mlCrc3-B').toggleClass('mlCrc3-F');
      $('.mlBar1-B').toggleClass('mlBar1-F');
      $('.mlBar2-B').toggleClass('mlBar2-F');
      
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
      $('.circuit-B').toggleClass('circuit-F');
      $('.mlBack-B').toggleClass('mlBack-F');
      $('.mlt1-B').toggleClass('mlt1-F');
      $('.mlt2-B').toggleClass('mlt2-F');
      $('.mleft-para-B').toggleClass('mleft-para-F');
      $('.ml-shadow-B').toggleClass('ml-shadow-F');
      $('.mlCrc1-B').toggleClass('mlCrc1-F');
      $('.mlCrc2-B').toggleClass('mlCrc2-F');
      $('.mlCrc3-B').toggleClass('mlCrc3-F');
      $('.mlBar1-B').toggleClass('mlBar1-F');
      $('.mlBar2-B').toggleClass('mlBar2-F');
    }
  });

  $("#em_logo").click(function() {
    
    $('#contact_box3').toggleClass('cb3_unext');
    $('#contact_box3').toggleClass('cb3_ext');

    $('#my_email').toggleClass('mye_unext');
    $('#my_email').toggleClass('mye_ext');
    
    $('#em_logo').toggleClass('elg_unext');
    $('#em_logo').toggleClass('elg_ext');
    
  });

  


});

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-transition-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-transition-stopper");
  }, 400);
});
