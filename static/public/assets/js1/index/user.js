

//获取登录用户信息
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
      if(res.status == "success"){
        $('#hiddenAvatar').prop('value',res.data.id)
        //console.log(uid);
        $('#preview').prop("src",res.data.picture)
        //console.log('ok');
        if(res.data.level == 1)
        $('.goback').fadeIn()
      }

    }
  });


//上传图片
$('#avatar').on('change',function (){
  //console.log(this.files[0]);
  let id =   $('#hiddenAvatar').val()
  console.log(id);
  let formData = new FormData();
  formData.append('file', this.files[0]);
  formData.append('id', id);
  $.ajax({
    type: "POST",
    url: "http://www.lcblog.xyz:81/user/picture",
    data: formData,
    // 告诉$.ajax方法不要解析请求参数
    processData: false,
    // 告诉$.ajax方法不要设置请求参数的类型
    contentType: false,
    xhrFields: {
      withCredentials: true
            //credentials: "include",
        },
    
    crossDomain: true,
    success: function (res) {
      console.log(res);
      if(res.status == "success"){
        $('#preview').prop("src",res.data)
        alert('修改成功！')
      }

    }
  });
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
          location.href = '../../../index.html'
        }else{
          alert(res.data.errMsg + '! ')
        }
      }
    });
    
  }
  
})