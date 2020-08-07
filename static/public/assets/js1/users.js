//baseURL = "http://www.lcblog.xyz/"

//请求用户数据展示
$.ajax({
  type: "get",
  url: "http://www.lcblog.xyz:81/users",
  data: {
    offset:0,
    limit:15
  },
  //dataType: "dataType",
  success: function (res) {
    //console.log(res);
    let html = template('userTpl',{data:res.data});
    //console.log(html);
    $('#userBox').html(html)
    
  }
});

//添加用户


$('#userForm').on('submit',function(){
  //获取用户输入的信息
  let formData = $(this).serializeArray(); 
  //console.log(formData);
  var postdata={};  //空对象
  //将数据转为JSON对象格式
  $(formData).each(function(i){    
      postdata[this.name]=this.value      
  });
  //将数据转为JSON字符串格式
  let postdata1 = JSON.stringify(postdata)
  console.log(postdata1);
  //请求新增用户
 /*  $.ajax({
    type: "post",
    url: "http://www.lcblog.xyz:81/user",
    data:postdata1,
    dataType: "json",
    contentType: "application/json;charset=UTF-8",
    xhrFields: {
      withCredentials: true
            //credentials: "include",
        },
    
    crossDomain: true,
    success: function (res) {
      console.log(res);
      if(res.status == "success"){
      //alert('用户添加成功')
      // 刷新页面
      location.reload();
      }else{
        switch(res.data.errCode){
          case 10001: 
            console.log(res.data.errMsg);
            alert(res.data.errMsg + '! 请输入6-16位字母+数字密码');
            break;  
            case 20003:
              console.log(res.data.errMsg);
              alert(res.data.errMsg + '! 请重新输入')
              break;
            case 20005:
              console.log(res.data.errMsg);
              alert(res.data.errMsg + '! 请重新输入')
              break;
  
          default :          
            console.log(res.data.errMsg);
            alert(res.data.errMsg + '! 请重新输入')
        }
      }

    },
    error:function(err){
      alert('用户添加失败')
      console.log(err);
    }
  });
   */
  //阻止表单的默认提交行为
  return false
})






// 当删除按钮被点击的时候

$('#userBox').on('click','.delete',function(){
  if(confirm('确定删除此用户吗？')){
    let id = $(this).attr('data-id')
    
    $.ajax({
      type: "DELETE",
      url: "http://www.lcblog.xyz:81/user/delete/" + id,
      xhrFields: {
        withCredentials: true
              //credentials: "include",
          },
      
      crossDomain: true,
      success: function (res) {
        console.log(res);
        if(res.status == "success"){
          location.reload();
        }
      },
      error:function(err){
        console.log(err);
        
      }
    });
    
  }
  
})



// 通过事件委托的方式为编辑按钮添加点击事件
$('#userBox').on('click', '.edit', function () {
  var Pictureid = $(this).attr('data-id');
  let id = $(this).attr('data-id');
  console.log(id);
  

    //获取上传的图片
  $('#modifyBox').on('change', '#avatar', function (){
    //console.log(this.files[0]);
    // 用户选择到的文件
    // this.files[0]
    
    console.log(Pictureid);
    
    let formData = new FormData();
    formData.append('file', this.files[0]);
    formData.append('id', Pictureid);
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
        }
      }
    });
  })




  $.ajax({
    type: "GET",
    url: "http://www.lcblog.xyz:81/user/" + id,
    success: function (res) {
      console.log(res)
      if(res.status == "success"){
        let html = template('modifyTpl',res.data);
        //console.log(html);
        $('#modifyBox').html(html);
      }
    }
  });
})
// 为修改表单添加表单提交事件
$('#modifyBox').on('submit','#modifyForm',function(){
    //获取用户输入的信息
    let formData = $(this).serializeArray(); 
    //console.log(formData);
    var postdata={};  //空对象
    //将数据转为JSON对象格式
    $(formData).each(function(i){    
        postdata[this.name]=this.value      
    });
    //将数据转为JSON字符串格式
    let postdata1 = JSON.stringify(postdata)
    console.log(postdata1);
    $.ajax({
      type: "PUT",
      url: "http://www.lcblog.xyz:81/user",
      data:postdata1,
      dataType: "json",
      contentType: "application/json;charset=UTF-8",
      xhrFields: {
        withCredentials: true
              //credentials: "include",
          },
      
      crossDomain: true,
      success: function (res) {
        console.log(res);
        if(res.status == "success"){
          alert('修改成功！');
          location.reload();
        }else{
          alert(res.data.errMsg + '!')
        }
  
      },
      error:function(err){
        alert('用户修改失败')
        console.log(err);
      }
    });


  return false
})