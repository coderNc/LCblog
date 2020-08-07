//数据统计

//请求用户数量
$.ajax({
  type: "get",
  url: "http://www.lcblog.xyz:81/users",
  data: {
    offset:0,
    limit:10000
  },
  success: function (res) {
    //console.log(res);
    if(res.status == "success"){
      let usersHtml = `用户：${res.data.length}`
      $('#user').html(usersHtml)
    }
    
  }
});


//请求分类数量
$.ajax({
  type: "GET",
  url: "http://www.lcblog.xyz:81/category",
  success: function (res) {
    //console.log(res);
    if(res.status == "success"){
      let categoryHtml = `分类：${res.data.length}`      
      $('#category').html(categoryHtml)
    }
  }
  });

//请求博客数量

$.ajax({
  type: "get",
  url: "http://www.lcblog.xyz:81/blogs",
  data: {
    offset:0,
    limit:10000
  },
  dataType: "json",
  contentType: "application/json;charset=UTF-8",
  success: function (res) {
    //console.log(res);
    if(res.status == "success"){
      let postsHtml = `博客：${res.data.length}`      
      $('#post').html(postsHtml)
    }
  }
});