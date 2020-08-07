//http://www.lcblog.xyz/
// 从浏览器的地址栏中获取查询参数
function getUrlParams(name) {
	var paramsAry = location.search.substr(1).split('&');
	// 循环数据
	for (var i = 0; i < paramsAry.length; i++) {
		var tmp = paramsAry[i].split('=');
		if (tmp[0] == name) {
			return tmp[1];
		}
	}
	return -1;
}
// 向服务器端发送请求 获取分类数据
$.ajax({
  type: "GET",
  url: "http://www.lcblog.xyz:81/category",
  success: function (res) {
    //console.log(res);
    if(res.status == "success"){
      let html = template('listTpl',{data:res.data});
      //console.log(html);
      $('.list-item').html(html)
    }
    
    
  }
});

//获取id
//let id = getUrlParams(id)
//console.log(location.search.substr(1).split('='));
let id = location.search.substr(1).split('=')[1]
//console.log(id);
if(id == undefined){
  // 向服务器端发送请求 获取文章列表数据
$.ajax({
  type: "get",
  url: "http://www.lcblog.xyz:81/blogs",
  data: {
    offset:0,
    limit:100
  },
  dataType: "json",
  contentType: "application/json;charset=UTF-8",
  success: function (res) {
    //console.log(res);
    if(res.status == "success"){
    let html = template('contentTpl',{data:res.data})
    //console.log(html);
    $('.new').html(html)
    }
  }
});
}else {
  
  //获取某一分类下的所有文章
$.ajax({
  type: "GET",
  url: "http://www.lcblog.xyz:81/blogs/category",
  data: {
    offset:0,
    limit:100,
    id:id
  },
  //dataType: "dataType",
  success: function (res) {
    console.log(res);
    if(res.status == "success"){
      let html = template('contentTpl',{data:res.data})
      $('.new').html(html)
    }
  }
});
}




