//回到顶部
//滚动事件
$(window).on('scroll',function(){
  let top = $('.backTop').offset().top
  //console.log(top);
  if(top > 1000){
    //$('.backTop').addClass('show')
    $('.backTop').fadeIn()
  }else {
    //$('.backTop').removeClass('show')
    $('.backTop').fadeOut()
  }
})


//点击返回顶部
$('.backTop').on('click',function(){
  //let top = $(this).offset().top
  $("body, html").stop().animate({
    scrollTop: 0
  });
  
})


//点击切换菜单
$('.fl').on('click',function(){
  $('.clickList').fadeToggle()
  
})



//点击登录
$('#login').on('click',function(){
  $.ajax({
    type: "get",
    url: "http://www.lcblog.xyz:81/picture",
    xhrFields: {
      withCredentials: true
            //credentials: "include",
        },
    crossDomain: true,
    success: function (res) {
      console.log(res);
      if(res == ''){
        location.href = '../../../admin/login.html'
        
      }else{
        alert('您已经登录过了0.0！')
      }
    }
  });
  



})

$.ajax({
  type: "get",
  url: "http://www.lcblog.xyz:81/picture",
  xhrFields: {
    withCredentials: true
          //credentials: "include",
      },
  crossDomain: true,
  success: function (res) {
    //console.log(res);
    if(res == ''){
      //location.href = '../../../admin/login.html' 
    }else{
      $('#userLogin').hide()
      $('#userInfo').show()
    }
  }
});
