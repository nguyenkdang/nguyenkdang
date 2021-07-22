var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  document.querySelector("#me-right").addEventListener("click", (e) => {
    if (document.querySelector("#me-right").classList.contains("back")) {
      var me_right = document.querySelector("#me-right");
      var me_left = document.querySelector("#me-left");

      me_right.classList.toggle("front");
      me_right.classList.toggle("back");
      me_left.classList.toggle("front");
      me_left.classList.toggle("back");
    }
  });
  
  document.querySelector("#me-left").addEventListener("click", (e) => {
    if (document.querySelector("#me-left").classList.contains("back")) {
      var me_right = document.querySelector("#me-right");
      var me_left = document.querySelector("#me-left");

      me_right.classList.toggle("front");
      me_right.classList.toggle("back");
      me_left.classList.toggle("front");
      me_left.classList.toggle("back");
    }
  });

  document.querySelector("#em_logo").addEventListener("click", (e) => {
    var email_box = document.querySelector("#email_box");
    email_box.classList.toggle("unext");
    email_box.classList.toggle("ext");
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
