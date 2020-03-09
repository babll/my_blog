$(function(){
  $.ajax({
      url:"footer.html",
      type:"get",
      success:function(result){
          // console.log(result)
          $("#footer").html(result);
      }
  });
})