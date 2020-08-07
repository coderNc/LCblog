//隐藏侧边栏
$('.navbar-btn').on('click',function(){
  $('.aside').stop().animate({width:'toggle'},350);
})


//退出登录
$('#logout').on('click',function(){
  if(confirm('确定退出登录吗？')){
    
    
    $.ajax({
      type: "post",
      url: "http://www.lcblog.xyz:81/logout",
      xhrFields: {
        withCredentials: true
              //credentials: "include",
          },
      crossDomain: true,
      success: function (res) {
        //console.log(res);
        if(res.status == "success"){
          alert(res.data + '! ')
          location.href = '../../admin/login.html'
        }else{
          alert(res.data.errMsg + '! ')
        }
      }
    });
    
  }
})



//查询登录用户
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
    $('.UserAvatar').prop("src",res.data.picture)
    $('.name').html(res.data.username)
  }
});