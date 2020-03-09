$(function(){
  $.ajax({
    url:"http://localhost:3000/else/html5",
    type:"get",
    dataType:"json",
    success:function(result){
      // console.log(result)
      var html = "";
      for(var p of result){
        var time = p.time.split("T")[0];
        html+=`
          <li>
            <h3>
              <b></b>
              <a href="${p.href}">${p.title}</a>
            </h3>
            <div class="content">
              <div class="left">
                <i><a href="javascript:;">HTML5|CSS3</a></i>
                <a href="${p.href}"><img src="${p.pic}" alt=""></a>
              </div>
              <div class="right">
                <span> ${p.details}</span>
                <div class="info">
                  <i>
                    <a href="javascript:;"><img src="images/01.jpg" alt=""></a>
                    <img src="images/v.png" alt="">
                  </i>
                  <span>${time}</span>
                  <b>【 <a href="javascript:;">HTML5|CSS3</a> 】</b>
                  <a href="${p.href}">阅读更多</a>
                </div>
              </div>
            </div>
          </li>
        `;
      }
      $(".left_box>.list>ul").html(html);
    }
  });
  $.ajax({
    url:"http://localhost:3000/else/html5_right",
    type:"get",
    dataType:"json",
    success:function(result){
      // console.log(result)
      var arr1 = result.slice(0,1);
      // console.log(arr1)
      var html1 = `
      <a href="${arr1[0].href}">
      <img src="${arr1[0].pic}" alt="">
        <span>${arr1[0].title}</span>
      </a>
      `;
      $(".right_box>.click_rank>.img").html(html1);
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
      $(".right_box>.click_rank>ul").html(html2);
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