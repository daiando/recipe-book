$(function() {
  $('#demo01').animatedModal({
    modalTarget: 'content01',
    animatedIn: 'bounceInUp', //OPENアニメーション
    animatedOut: 'bounceOutUp', //CLOSEアニメーション
    animationDuration: '1s', //アニメーションにかける秒数
    color: 'rgba(0,0,0,0.9)', //背景色
  });
});
