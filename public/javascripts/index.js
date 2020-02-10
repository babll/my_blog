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
$("#newslist>ul>li").hover(
  function(){
    $(this).children(":last-child").css("display","block").parent().siblings().children(":last-child").css("display","none");
    $(this).children(":first-child").css("background","#333").parent().siblings().children(":first-child").css("background","#9a9a9a");
    $(this).find("a").css("font-weight","bold").parent().siblings().find("a").css("font-weight","400");
  },
  function(){
    $(this).children(":last-child").css("display","none");
    $(this).children(":first-child").css("background","#9a9a9a");
    $(this).find("a").css("font-weight","400");
  }
);
$("#newslist>ul").hover(
  function(){},
  function(){
    $(this).children(":first-child").children(":last-child").css("display","block");
    $(this).children(":first-child").children(":first-child").css("background","#333");
    $(this).children(":first-child").find("a").css("font-weight","bold");
  }
)
