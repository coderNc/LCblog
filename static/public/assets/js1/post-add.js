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
//获取aid
//let id = getUrlParams(id)
//console.log(location.search.substr(1).split('='));
//let aid = location.search.substr(1).split('=')[1]
//console.log(aid);


let aid = getUrlParams('aid')
let id = getUrlParams('id')
//console.log(aid);
//console.log(id);

  /* 文章的编辑 */
  if(aid == 1){
    //根据id获取博客
    $.ajax({
      type: "GET",
      url: "http://www.lcblog.xyz:81/blog/" + id,
      success: function (res) {
        //console.log(res);
        if(res.status == "success"){
          let html = template('modifyTpl',res.data)
          $('#parentBox').html(html)
        }
      }
    });


  }







//提交表单
$('#addForm').on('submit',function(){
  let formData = $(this).serializeArray(); 
  //console.log(formData);
  var postdata={};  //空对象
  //将数据转为JSON对象格式
  $(formData).each(function(i){    
      postdata[this.name]=this.value      
  });
  
  const editorData = editor.getData()
  //console.log(editorData);
  postdata.blogContent = editorData
  //console.log(postdata);
  //将数据转为JSON字符串格式
  let postdata1 = JSON.stringify(postdata)
  console.log(postdata1);
  
  //console.log(editorData);
/*   $.ajax({
    type: "post",
    url: "http://www.lcblog.xyz:81/blog",
    data:postdata1,
    dataType: "json",
    contentType: "application/json;charset=UTF-8",
    xhrFields: {
            withCredentials: true
        },
    crossDomain: true,
    success: function (res) {
      console.log(res);
      if(res.status == 'success'){
        alert('发布成功！')
        location.reload();
      }else {
        alert(res.data.errMsg)
      }
    }
  }); */
  //阻止表单的默认提交行为
  return false
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
      $('#category').html(html)
    }
    
    
  }
});

