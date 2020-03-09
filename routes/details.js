const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var lid=req.query.lid;
  var output={};
  var sql="SELECT * FROM wz_laptop where lid=?";
  query(sql,[lid])
  //open(result)->then(result=>{...})
  .then(result=>{
    // res.send(result)
    output.product=result[0];
    var fid=output.product.family_id;
    var sql="SELECT * FROM wz_laptop_family where fid=?";
    //要想继续用then，必须返回Promise对象
    return query(sql,[fid])//return Promise
  })
  .then(result=>{
    output.family=result;
    res.send(output)
  })
  //err(error)->catch(error=>{...})
  .catch(error=>console.log(error))
})
module.exports=router;
//http://localhost:3000/details?lid=3