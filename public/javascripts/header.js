$(function(){
    $.ajax({
        url:"header.html",
        type:"get",
        xhrFields:{withCredentials:true},
        success:function(result){
            // console.log(result)
            $("#header").html(result);
        }
    });
    setTimeout(function(){
      var searchBar=document.getElementById("search_bar");
      var close=document.getElementById("close");
      var search=document.querySelector("#header>div.nav_box>.content>div.search>img");
    //   console.log(searchBar)
      search.onclick=function(){
          searchBar.style.display="block";
      }
      close.onclick=function(){
          searchBar.style.display="none";
      }
    },3000) ;
    $.ajax({
        url:"http://localhost:3000/users/query",
        type:"get",
        xhrFields:{withCredentials:true},
        success:function(result){
            //   console.log(result) 
            if(result.code==-1){
                alert("请登录");
                window.location.href="login.html";
            }
        }
    })
})