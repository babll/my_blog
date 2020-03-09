$(function(){
  var lid = location.search.split("=")[1];
  if(lid!==undefined){
    $.ajax({
      url:"http://localhost:3000/details",
      type:"get",
      data:{lid},
      dataType:"json",
      success:function (result){
        // console.log(result)
        var {product,family}=result;
        for(var key in product){
          if(product[key]==null){
            // console.log(product[key])
            product[key]="";
          }
        }
        var time = product.time.split("T")[0];
        var html=`
        <div class="title">
          <span>${family[0].fname}</span>
          <ul>
            <li>您现在的位置:</li>
            <li><a href="index.html">首页</a></li>
            <li>></li>
            <li><a href="causerie.html">${family[0].fname}</a></li>
          </ul>
        </div>
        <h1 class="con_title">${product.title}</h1>
        <ul class="bloginfo">
          <li>
            <i>
              <a href="javascript:;"><img src="images/01.jpg" alt=""></a>
              <img src="images/v.png" alt="">
            </i>
          </li>
          <li>${time}</li>
          <li>【网站公告】</li>
          <li>108人已围观</li>
        </ul>
        <p class="con_info">
          <b>简介</b>&nbsp;&nbsp;&nbsp;&nbsp;${product.intro}
        </p>
        <div class="con_text">
          <h2>${product.h_title1}</h2>
          <p>${product.paragraph1}</p>
          <h2>${product.h_title2}</h2>
          <p>${product.paragraph2}</p>
          <h2>${product.h_title3}</h2>
          <p>${product.paragraph3}</p>
          <h2>${product.h_title4}</h2>
          <p>${product.paragraph4}</p>
        </div>
        <ul class="tags">
          <li>Tags : </li>
          <li><a href="javascript::"> ${product.tag1}</a></li>
          <li><a href="javascript::">${product.tag2}</a></li>
        </ul>
        <p class="diggit">
          <span> 很赞哦！ ( <b>108</b> )</span>
        </p>
        <div class="nextinfo">
          <p>
            <span>上一篇：</span><a href="javascript;">十条设计原则教你学会如何设计网页布局!</a>
          </p>
          <p>
            <span>下一篇：</span><a href="javascript:;">2019年 值得收藏的 15 个 JavaScript 和 CSS 动画库</a>
          </p>
        </div>`;
        $(".left").html(html);
      }
    })
  };
  // 侧边栏
  $.ajax({
    url:"http://localhost:3000/index/index_right",
    type:"get",
    dataType:"json",
    success:function(result){
      var arr1 = result.slice(0,1);
      // console.log(arr1)
      var html1 = `
      <a href="${arr1[0].href}">
      <img src="${arr1[0].pic}" alt="">
        <span>${arr1[0].title}</span>
      </a>
      `;
      $(".right>.click_rank>.img").html(html1);
      var arr2 = result.slice(1,4);
      var html2 = "";
      for(var p of arr2){
        html2+=`
        <li>
          <a href="${p.href}">
            <i></i>
            <span>${p.title}</span>
          </a>
        </li>
        `;
      }
      $(".right>.click_rank>ul").html(html2);
      var arr3 = result.slice(4,5);
      var html3 = `
        <a href="${arr3[0].href}">
          <img src="${arr3[0].pic}" alt="">
          <span>${arr3[0].title}</span>
        </a>
      `;
      $(".tuijian>.img").html(html3);
      var arr4 = result.slice(5,8);
      var html4 = "";
      for(var p of arr4){
        html4+=`
        <li>
          <a href="${p.href}">
            <img src="${p.pic}" alt="">
            <span>${p.title}</span>
          </a>
        </li>
        `;
      }
      $(".tuijian>ul").html(html4);
    }
  });
})