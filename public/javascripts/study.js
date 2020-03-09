$(function(){
  $.ajax({
    url:"http://localhost:3000/else/study",
    type:"get",
    dataType:"json",
    success:function(result){
      var html = "";
      for(var p of result){
        var time = p.time.split("T")[0];
        html+=`
          <li>
            <a href="${p.href}">
              <img src="${p.pic}" alt="">
              <p>${p.title}</p>
            </a>
            <div class="title">
              <span>${p.details}</span>
              <div class="info">
                <ul>
                  <li>
                    <img src="images/sj.png" alt="">
                    <span>${time}</span>
                  </li>
                  <li>
                    <img src="images/bq.png" alt="">
                    <span>【 <a href="javascript:;">书屋</a> 】</span>
                  </li>
                </ul>
              </div>
            </div>
        </li>
        `;
      }
      $("#article>.left>ul").html(html);
    }
  });

  $.ajax({
    url:"http://localhost:3000/else/study_right",
    type:"get",
    dataType:"json",
    success:function(result){
      var arr1 = result.slice(0,1);
      var html1 = `
        <a href="${arr1[0].href}">
          <img src="${arr1[0].pic}" alt="">
          <span>${arr1[0].title}</span>
        </a>
      `;
      $(".right>.tuijian>.img").html(html1);
      var arr2 = result.slice(1,4);
      var html2 = "";
      for(var p of arr2){
        html2+=`
        <li>
          <a href="${p.href}">
            <img src="${p.pic}" alt="">
            <span>${p.title}</span>
          </a>
        </li>
        `;
      }
      $(".right>.tuijian>ul").html(html2);
    }
  })
})