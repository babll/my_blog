var newslist=document.getElementById("newslist");
var lis=newslist.querySelectorAll("ul>li")
console.log(lis);
for(var li of lis){
  li.onclick=function(){
    //this.style.backgroundColor="red"
    if(this.className=="open"){
      this.className="";
    }else{
      var liOpen=newslist.querySelector("ul>li.open");
      if(liOpen!=null){
        liOpen.className="";
      };
      this.className="open";
    }
  } 
}