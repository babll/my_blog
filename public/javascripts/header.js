var searchBar=document.getElementById("search_bar");
      var close=document.getElementById("close");
      var search=document.querySelector("div.nav_box div.search>img");
      search.onclick=function(){
          searchBar.style.display="block";
      }
      close.onclick=function(){
          searchBar.style.display="none";
      }