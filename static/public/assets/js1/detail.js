

function reHeightCode() {
  $("code").each(function(){
      var code = $(this).text();
      var highCode = hljs.highlightAuto(code).value;
      $(this).html(highCode)
      $(this).addClass('hljs')
  });
}
//获取id
//let id = getUrlParams(id)
//console.log(location.search.substr(1).split('='));
let id = location.search.substr(1).split('=')[1]
//console.log(id);



//根据id获取博客
  
$.ajax({
  type: "GET",
  url: "http://www.lcblog.xyz:81/blog/" + id,
  success: function (res) {
    //console.log(res);
    if(res.status == "success"){
      let html = template('detailTpl',res.data)
      $('.detail-wrapper').html(html)
      reHeightCode()
      if(res.data.blogCommon.length !=0 ){
        //console.log('ok');
        //console.log(res.data.blogCommon);
        
        let commentsHtml = template('commentTpl',{data:res.data.blogCommon})
        $('.comments-content-wrapper').html(commentsHtml)
        let commentsCount = `<h3>共${res.data.blogCommon.length}条评论</h3>`
        $('.comments-count').html(commentsCount)
      }
    }
  }
});




















//是否显示提示
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
    if(res.status == "success"){
      $('.comment-info').hide()
    }

  }
});















//点赞文章
$('.detail-wrapper').on('click','.dianzan',function(){
  $.ajax({
  type: "post",
  url: "http://www.lcblog.xyz:81/blog/like/" + id,
  xhrFields: {
    withCredentials: true
          //credentials: "include",
      },
  
  crossDomain: true,
  success: function (res) {
    console.log(res);
    if(res.status == "success"){
      let dianzanHtml = `<a href="javascript:;">点赞（${res.data}） <i class="iconfont icon-yidianzan"></i></a>
      <p>-------------本文结束感谢您的阅读-------------</p>`
      $('.dianzan').html(dianzanHtml)
    }else{
      alert(res.data.errMsg + '! ')
    }
  }
});

})


//添加评论
$('.comment-btn').on('click',function(){
  let commonContent = $('#comments-content').val()
  console.log(commonContent);
  let username = $('#username').val()
  console.log(username);
  $.ajax({
    type: "POST",
    url: "http://www.lcblog.xyz:81/common",
    data: JSON.stringify({
      commonTargetName:username,
      blogId:id,
      commonContent:commonContent,
      pid:0
    }),
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
        alert('评论成功！')
        location.reload();
      }else{
        alert(res.data.errMsg + '! ')
      }
    }
  });


})




