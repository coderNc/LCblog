$('#modifyForm').on('submit',function(){
  let oldPassword = $('#old').val()
  let newPassword = $('#password').val()
  $.ajax({
    type: "POST",
    url: "http://www.lcblog.xyz:81/user/password",
    data:{
      lastPassword:oldPassword,
      newPassword:newPassword
    },
    xhrFields: {
      withCredentials: true
            //credentials: "include",
        },
    
    crossDomain: true,
    success: function (res) {
      //console.log(res);
      if(res.status == "success"){
        alert(res.data)
        location.reload();
      }else{
        alert(res.data.errMsg + '! 请重新输入')
      }
    }
  });

  return false
})