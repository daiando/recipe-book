$(function(){

  // when click
  $(".open_login_modal").click(function(){
    //insert <div class="login_modal_bg"></div> at the end of body
    $("body").append('<div class="login_modal_bg">this is bg</div>');

    //calculate center position
    modalResize();

    //show modal window
    $('.login_modal_bg, .login_modal_main').fadeIn("slow");

    //close
    $('.login_modal_close').click(function(){
      $('.login_modal_bg, .login_modal_main').fadeOut("slow",function(){
        //remove <div id="login_modal_bg"></div>
        $('.login_modal_bg').remove() ;
      });

    });

    //画面の左上からmodal-mainの横幅・高さを引き、その値を2で割ると画面中央の位置が計算できます
    $(window).resize(modalResize);
    function modalResize(){

      var w = $(window).width();
      var h = $(window).height();

      var cw = $(".login_modal_main").outerWidth();
      var ch = $(".login_modal_main").outerHeight();

      //取得した値をcssに追加する
      $(".login_modal_main").css({
        "left": ((w - cw)/2) + "px",
        "top": ((h - ch)/2) + "px"
      });
    }
  });
});
