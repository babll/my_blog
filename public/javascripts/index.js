// var tabs=document.querySelectorAll("div.tab_buttons>ul>li");
// //console.log(tabs);
// var Zindex=10;
// for(var tab of tabs){
//   tab.onclick=function(){
//     if(this.className=="underline"){
//       this.className="";
//     }else{
//       var tabOpen=document.querySelector("div.tab_buttons>ul>li.underline");
//       if(tabOpen!=null){
//         tabOpen.className="";
//       }
//       this.className="underline";
//     }
//     var id=this.getAttribute("data-conent");
//     //console.log(id)
//     var div=document.getElementById(id);
//     //console.log(div);
//     Zindex++;
//     div.style.zIndex=Zindex;
//   }
// };
$("[data-click]").click(function(){
  //console.log($("[data-click]"))
  var $Zindex=10;
  var $li=$(this);
  if($li.hasClass("underline")){
    $li.removeClass("underline");
  }else{
    var $tabOpen=$(".underline");
    if($tabOpen!=null){
      $tabOpen.removeClass("underline");
    }
    $li.addClass("underline");
  }
  var $id=$li.attr("data-conent");
  var div=document.getElementById($id);
  div.style.zIndex=$Zindex;
})

