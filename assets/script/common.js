$(function () {
    $(window).scroll(function () {
        $(".logo").toggleClass('small', $(window).scrollTop() > 100);
    });
});

$("#menuBtn").change(function () {
    $('body, .menu-btn, .logo, .logo-w').toggleClass('expand');
    $('.menu-wrapper').slideToggle();
});

var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
  });


// 網頁計數
var appUrl =
"https://script.google.com/macros/s/AKfycbxt1ngOJroO6XYCWnz-1RcJ1QUhLjfREpAxMuAx_c8FA9_7Ba-GOntRuoy15U2sKh8w/exec";

var data = {
  path: window.location.pathname
};

$.ajax({
  type: "post",
  data: data,
  url: appUrl,
  success: function (res) {
    let visitorPv = $("#visitors");
    let articlePv = $("#pv");
    if(visitorPv){
      visitorPv.html(res[1].toLocaleString());
    };
    
    if(articlePv){
      articlePv.html(res[0].toLocaleString());
    }      
  },
  error: function (err) {
    console.log(err);
  }
});