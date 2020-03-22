$(function(){
  var unmaeMsg = /^[a-zA-Z0-9]{3,24}$/;
  var upwdMsg = /^[a-zA-Z0-9]{6,18}$/i;
  $("#uname").focus(function(){
    $("#uname-msg").html($(`<p>请输入3到24位的数字或者字母</p>`));
  });
  $("#upwd").focus(function(){
    $("#upwd-msg").html($(`<p>请输入6到18位的数字或者字母</p>`));
  });

  $("#uname").blur(function(){
    if($(this).val()==""){
      $("#uname-msg").html($(`<p style="color:red;">账户不能为空</p>`));
      return;
    }else if(!unmaeMsg.test($(this).val())){
      $("#uname-msg").html($(`<p style="color:red;">账户格式不正确</p>`));
      return;
    }else{
      var uname = $("#uname").val();
      $.ajax({
        url:"http://localhost:3000/users/detection",
          data:{uname:uname},
          type:"get",
          // dataType:"",
          success:function(result){
            // console.log(result);
            if(result==1){
              $("#uname-msg").html($(`<p style="color:red;">该账户已存在！</p>`));
              return;
            }else{
              $("#uname-msg").html($(`<p style="color:green;">账户格式正确</p>`));
            }
          } 
      })
    }
  })
  $("#upwd").blur(function(){
    if($(this).val()==""){
      $("#upwd-msg").html($(`<p style="color:red;">密码不能为空</p>`));
      return;
    }else if(!upwdMsg.test($(this).val())){
      $("#upwd-msg").html($(`<p style="color:red;">密码格式不正确</p>`));
      return;
    }else{
      $("#upwd-msg").html($(`<p style="color:green;">密码格式正确</p>`));
      $("#btn").click(function(){
        var uname = $("#uname").val();
        var upwd = $("#upwd").val();
        // console.log(uname,upwd)
        $.ajax({
          url:"http://localhost:3000/users/reg",
          data:{uname:uname,upwd:upwd},
          type:"post",
          // dataType:"",
          success:function(result){
            // console.log(result);
            if(result.code==200){
              alert("注册成功");
              window.location.href="login.html"
            }else{
              alert("注册失败");
            } 
          }
        })
      })
    }
  })
})
