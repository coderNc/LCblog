//提交新增分类
$('#addCategory').on('submit',function(){
  let category = $("#categorieAdd").val()
  //console.log(category);
  
$.ajax({
  type: "POST",
  url: "http://www.lcblog.xyz:81/category",
  data: {
    category:category
  },
  //dataType: "json",
  //contentType: "application/json;charset=UTF-8",
  success: function (res) {
    console.log(res);
    if(res.status == "success"){
      alert('添加成功！');
      location.reload();
    }else{
      alert(res.data.errMsg + "!");
    }
    
  },
  error:function(err){
    alert('分类添加失败')
    console.log(err);
    
  }
});
return false;
})

//请求分类列表 
$.ajax({
type: "GET",
url: "http://www.lcblog.xyz:81/category",
success: function (res) {
  //console.log(res);
  if(res.status == "success"){
    let html = template('categoryTpl',{data:res.data});
    //console.log(html);
    $('#categoryBox').html(html)
  }
}
});


//删除分类
$('#categoryBox').on('click','.delete',function(){
let id = $(this).attr('data-id');
if(confirm('确定删除吗？')){
  $.ajax({
  type: "DELETE",
  url: "http://www.lcblog.xyz:81/category/" + id,
  xhrFields: {
    withCredentials: true
          //credentials: "include",
      },
  
  crossDomain: true,
  success: function (res) {
    console.log(res);
    if(res.status == 'success'){
      location.reload();
    }
  }
});
}
})