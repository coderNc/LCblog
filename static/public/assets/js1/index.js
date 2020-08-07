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
    //console.log(res);
    let html = template('contentTpl',{data:res.data})
    //console.log(html);
    $('.new').html(html)


    //置顶操作
    let topArr = res.data.filter(function(value){
      //console.log(value);
      return value.status == 1
    })
    //console.log(topArr);
    if(topArr.length != 0){
      let topHtml = template('topTpl',{data:topArr})
      $('.top').html(topHtml)
    }else{
      $('.topTitle').hide()
      $('.top').hide()
    }

    
    //热门操作
    let titleArr = []
    res.data.forEach(function(value,index){
      //console.log(value);
      
      titleArr.push({blogTitle:value.blogTitle,id:value.id})
      
    })
    //console.log(titleArr);
    let hotHtml = template('hotTpl',{data:titleArr})
    //console.log(hotHtml);
    $('.hot-content').html(hotHtml)
  }
});

