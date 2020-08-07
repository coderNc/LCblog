//http://www.lcblog.xyz/
// 向服务器端发送请求 获取文章列表数据
$.ajax({
  type: "get",
  url: "http://www.lcblog.xyz:81/blogs",
  data: {
    offset:0,
    limit:15
  },
  dataType: "json",
  contentType: "application/json;charset=UTF-8",
  success: function (res) {
    console.log(res);
    let html = template('postsTpl',{data:res.data})
    //console.log(html);
    $('#postsBox').html(html)
  }
});


//删除文章
$('#postsBox').on('click','.delete',function(){
  if(confirm('确定删除此博客吗？')){
    let id = $(this).attr('data-id')
    console.log(id);
    $.ajax({
      type: "DELETE",
      url: "http://www.lcblog.xyz:81/blog/" + id,
      xhrFields: {
        withCredentials: true
              //credentials: "include",
          },
      
      crossDomain: true,
      success: function (res) {
        console.log(res);
        if(res.status == "success"){
          alert(res.data)
          location.reload();
        }
      },
      error:function(err){
        console.log(err);
      }
    });







  }




})
























//修改文章



