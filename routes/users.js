var express = require('express');
var router = express.Router();
const pool=require('../pool.js');

/* GET users listing. */
router.get('/login',(req,res,next)=>{
  var $uname=req.query.uname;
  var $upwd=req.query.upwd;
  pool.query('SELECT*FROM wz_user WHERE uname=?AND upwd=?',[$uname,$upwd],(err,result)=>{
    if(err) throw err;
    console.log(result)
	if(result.length>0){
    req.session.uid = result[0].uid;
    res.send("1");
	}else{
	  res.send('0');
	}
  });
});
router.get('/detection',(req,res,next)=>{
  var $uname=req.query.uname;
  pool.query('SELECT*FROM wz_user WHERE uname=?',[$uname],(err,result)=>{
    if(err) throw err;
    // console.log(result)
	if(result.length>0){
    res.send("1");
	}else{
	  res.send('0');
	}
  });
});

router.post('/reg',(req,res)=>{
  var obj=req.body;
  // var $upwd=req.query.upwd;
  pool.query('INSERT INTO wz_user SET ?',[obj],(err,result)=>{
    if(err) throw err;
	console.log(result);
	//如果数据插入成功，响应对象
	if(result.affectedRows>0){
	  res.send({code:200,msg:'register suc'});
	  //res.redirect('/login');
	}
  });
});

router.get("/query",(req,res)=>{
  var uid = req.session.uid;
  if(!uid){
    res.send({code:-1,msg:"请登录"});
    return;
  }
})

module.exports = router;
