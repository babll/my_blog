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

