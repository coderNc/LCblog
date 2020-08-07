$( document ).ready( function() {
  // 向服务器端发送请求 获取分类数据
  $.ajax({
    type: "GET",
    url: "http://www.lcblog.xyz:81/category",
    success: function (res) {
      //console.log(res);
      if(res.status == "success"){
        var entries = []
        res.data.forEach(function(value){
          //console.log(value);
          entries.push({label: value.categoryName, url: `category.html?id=${value.id}`, target: '_top'})
        })
        //console.log(entries);
        var settings = {

            entries: entries,
            width: 400,
            height: 480,
            radius: '65%',
            radiusMin: 75,
            bgDraw: true,
            bgColor: '#fff',
            opacity: 0.5,
            opacityOver: 1.00,
            opacityOut: 0.05,
            opacitySpeed: 6,
            fov: 800,
            speed: 0.5,
            fontFamily: 'Oswald, Arial, sans-serif',
            fontSize: '15',
            fontColor: '#000',
            fontWeight: 'normal',//bold
            fontStyle: 'normal',//italic 
            fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
            fontToUpperCase: true

            };

            //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
            $( '#tag-cloud' ).svg3DTagCloud( settings );
      }
      
      
    }
  });
/*     var entries = [
  { label: '数据库', url: 'category.html', target: '_top' }
  ] */
  /* var entries = [ 
    { label: '数据库', url: 'category.html', target: '_top' },
    { label: '计算机基础', url: 'category.html', target: '_top' },
    { label: '计算机网络', url: 'category.html', target: '_top' },
    { label: '	Spring', url: 'category.html', target: '_top' },
    { label: '	前端 ', url: 'category.html', target: '_top' },
    { label: 'Java', url: 'category.html', target: '_top' },
    { label: 'JavaScript', url: 'category.html', target: '_top' },
    { label: 'Form Validation', url: 'category.html', target: '_top' },
    { label: 'JS Compress', url: 'category.html', target: '_top' },
    { label: 'TinyPNG', url: 'category.html', target: '_top' },
    { label: 'Can I Use', url: 'category.html', target: '_top' },
    { label: 'URL shortener', url: 'category.html', target: '_top' },
    { label: 'Grid Layout', url: 'category.html', target: '_top' },
    { label: 'Twitter', url: 'category.html', target: '_top' },
    { label: 'deviantART', url: 'category.html', target: '_top' },
    { label: 'Gulp', url: 'category.html', target: '_top' },
    { label: 'Browsersync', url: 'category.html', target: '_top' },
    { label: 'GitHub', url:'category.html', target: '_top' },
    { label: 'Shadertoy', url: 'category.html', target: '_top' },
    { label: 'Tree View', url: 'category.html', target: '_top' },
    { label: 'jsPerf', url: 'category.html', target: '_top' },
    { label: 'Foundation', url: 'category.html', target: '_top' },
    { label: 'CreateJS', url: 'category.html', target: '_top' },
    { label: 'Velocity.js', url: 'category.html', target: '_top' },
    { label: 'TweenLite', url: 'category.html', target: '_top' },
    { label: 'jQuery', url: 'category.html', target: '_top' },
    { label: 'Notification', url: 'category.html', target: '_top' },
    { label: 'Parallax', url: 'category.html', target: '_top' }
  ]; */



} );
