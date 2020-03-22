$(function(){
  $.ajax({
    url:"http://localhost:3000/index/tag",
    type:"get",
    dataType:"json",
    xhrFields:{withCredentials:true},
    success:function(result){
      // console.log(result);
      // 心情随笔tag栏
      var arr1 = result.slice(0,2);
      var html1 = "";
      for(var p of arr1){
        html1+=`
        <li>
        <a href="${p.href}"><img src="${p.pic}" alt=""><span>${p.title}</span></a>
        </li>
        `
      }
      $("#tag_left1").html(html1);
      var arr2 = result.slice(0,5);
      var html2 = "";
      for(var p of arr2){
        html2+=`
        <li>
        <i></i>
        <a href="${p.href}" >${p.title}</a>
        <p>${p.details}</p>
      </li>
        `
      }
      $("#tag1").html(html2);
       
      // 学无止境tag栏
      var arr3 = result.slice(5,7);
      var html3 = "";
      for(var p of arr3){
        html3+=`
        <li>
        <a href="${p.href}"><img src="${p.pic}" alt=""><span>${p.title}</span></a>
        </li>
        `
      }
      $("#tag_left2").html(html3);
      var arr4 = result.slice(5,10);
      var html4 = "";
      for(var p of arr4){
        html4+=`
        <li>
        <i></i>
        <a href="${p.href}" >${p.title}</a>
        <p>${p.details}</p>
      </li>
        `
      }
      $("#tag2").html(html4);
      
      // HTML|CSS tag栏
      var arr5 = result.slice(10,12);
      var html5 = "";
      for(var p of arr5){
        html5+=`
        <li>
        <a href="${p.href}"><img src="${p.pic}" alt=""><span>${p.title}</span></a>
        </li>
        `
      }
      $("#tag_left3").html(html5);
      var arr6 = result.slice(10,15);
      var html6 = "";
      for(var p of arr6){
        html6+=`
        <li>
        <i></i>
        <a href="${p.href}" >${p.title}</a>
        <p>${p.details}</p>
      </li>
        `
      }
      $("#tag3").html(html6);
      // 书屋 tag栏
      var arr7 = result.slice(15,17);
      var html7 = "";
      for(var p of arr7){
        html7+=`
        <li>
        <a href="${p.href}"><img src="${p.pic}" alt=""><span>${p.title}</span></a>
        </li>
        `
      }
      $("#tag_left4").html(html7);
      var arr8 = result.slice(15,20);
      var html8 = "";
      for(var p of arr8){
        html8+=`
        <li>
          <i></i>
          <a href="${p.href}" >${p.title}</a>
          <p>${p.details}</p>
        </li>`
      }
      $("#tag4").html(html8);
      // 特别推荐
      var arr9 = result.slice(3,9);
      var html9 = "";
      for(var p of arr9){
        html9+=`
        <li>
          <i>
            <img src="${p.pic}" alt="">
          </i>
          <p>${p.title}</p>
          <span>${p.details}</span>
          <a href="${p.href}">+文章阅读</a>
        </li>
        `;
        $(".tebietj>ul").html(html9);
      }
    }
  });
  $.ajax({
    url:"http://localhost:3000/index/index_right",
    type:"get",
    dataType:"json",
    xhrFields:{withCredentials:true},
    success:function(result){
      var arr1 = result.slice(0,2);
      var html1 = "";
      for(var p of arr1){
        html1+=`
        <li>
          <a href="${p.href}"><img src="${p.pic}" alt=""><span>${p.title}</span></a>
        </li>
        `;
      }
      $(".headline>ul").html(html1);
      // 最近更新
      var arr2 = result.slice(2,6);
      var html2 = "";
      for(var p of arr2){
        html2+=`
        <li><a href="${p.href}"> ${p.title} </a></li>
        `;
      }
      $(".recent_updates>ul").html(html2);
      // 点击排行
      var arr3 = result.slice(6,7);
      var html3 = `
      <a href="${arr3[0].href}">
        <img src="${arr3[0].pic}" alt="">
        <span>${arr3[0].title}</span>
      </a>`;
      $(".click_rank .img").html(html3);
      var arr4 = result.slice(7,14);
      var html4 = "";
      for(var p of arr4){
        html4+=`
          <li>
            <a href="${p.href}">
            <i></i>
            <span>${p.title}</span>
            </a>
          </li>
        `;
      }
      $(".click_rank>ul").html(html4);
      // 站长推荐
      var arr5 = result.slice(14,15);
      var html5 = `
      <a href="${arr5[0].href}">
        <img src="${arr5[0].pic}" alt="">
        <span>${arr5[0].title}</span>
      </a>`;
      $(".tuijian>.img").html(html5);
      var arr6 = result.slice(15,21);
      var html6 = "";
      for(var p of arr6){
        html6+=`
        <li>
          <a href="${p.href}">
            <img src="${p.pic}" alt="">
            <span>${p.title}</span>
          </a>
        </li>
        `;
      }
      $(".tuijian>ul").html(html6);
    }
  });

  $.ajax({
    url:"http://localhost:3000/index/index_newest",
    type:"get",
    dataType:"json",
    xhrFields:{withCredentials:true},
    success:function(result){
      // console.log(result)
      var arr = result.slice(13,18);
      var html = "";
      for(var p of arr){
        var time = p.time.split("T")[0];
        html+=`
        <li>
          <h3>
            <b>【顶】</b>
            <a href="${p.href}">${p.title}</a>
          </h3>
          <div class="content">
            <div class="left">
              <i><a href="${p.href}">${p.fname}</a></i>
              <a href="${p.href}"><img src="${p.pic}" alt=""></a>
            </div>
            <div class="right">
              <span>${p.details}</span>
              <div class="info">
                <i>
                  <a href="javascript:;"><img src="images/01.jpg" alt=""></a>
                  <img src="images/v.png" alt="">
                </i>
                <span>${time}</span>
                <b>【 <a href="javascript:;">${p.fname}</a> 】</b>
                <a href="${p.href}">阅读更多</a>
              </div>
            </div>
          </div>
        </li>
        `;
      }
      $(".newest>ul").html(html);
    }
  });

  // tab标签
  var tabs=document.querySelectorAll("div.tab_buttons>ul>li");
  //console.log(tabs);
  var Zindex=10;
  for(var tab of tabs){
    tab.onclick=function(){
      if(this.className=="underline"){
        this.className="";
      }else{
        var tabOpen=document.querySelector("div.tab_buttons>ul>li.underline");
        if(tabOpen!=null){
          tabOpen.className="";
        }
        this.className="underline";
      }
      var id=this.getAttribute("data-conent");
      //console.log(id)
      var div=document.getElementById(id);
      //console.log(div);
      Zindex++;
      div.style.zIndex=Zindex;
    }
  };
  // 手风琴效果
  $("#newslist>ul").on("mouseenter","li",function(){
      // console.log("111")
      $(this).children(":last-child").css("display","block").parent().siblings().children(":last-child").css("display","none");
      $(this).children(":first-child").css("background","#333").parent().siblings().children(":first-child").css("background","#9a9a9a");
      $(this).find("a").css("font-weight","bold").parent().siblings().find("a").css("font-weight","400");
    }
  );
  $("#newslist>ul").on("mouseleave","li",function(){
      $(this).children(":last-child").css("display","none");
      $(this).children(":first-child").css("background","#9a9a9a");
      $(this).find("a").css("font-weight","400");
    });

  $("#newslist>ul").hover(
    function(){},
    function(){
      $(this).children(":first-child").children(":last-child").css("display","block");
      $(this).children(":first-child").children(":first-child").css("background","#333");
      $(this).children(":first-child").find("a").css("font-weight","bold");
    }
  );
});
