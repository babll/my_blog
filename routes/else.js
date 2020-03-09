var express = require('express');
var router = express.Router();
const pool=require('../pool.js');

router.get('/causerie', function(req, res, next) {
  var sql="SELECT * FROM wz_index_product WHERE family_id=1";
  pool.query(sql,[],(err,result)=>{
    if(err)throw err;
    // res.writeHead(200,{
    //   "Access-Control-Allow-Origin":"*"
    // });
    // res.write(JSON.stringify(result));
    // res.end();//发送
    res.send(result);
    // console.log(result);
  })
});
router.get('/causerie_right', function(req, res, next) {
  var sql="SELECT * FROM wz_sidebar_right WHERE family_id=1";
  pool.query(sql,[],(err,result)=>{
    if(err)throw err;
    // res.writeHead(200,{
    //   "Access-Control-Allow-Origin":"*"
    // });
    // res.write(JSON.stringify(result));
    // res.end();//发送
    res.send(result);
    // console.log(result);
  })
});
router.get('/infinite', function(req, res, next) {
  var sql="SELECT * FROM wz_index_product WHERE family_id=2";
  pool.query(sql,[],(err,result)=>{
    if(err)throw err;
    // res.writeHead(200,{
    //   "Access-Control-Allow-Origin":"*"
    // });
    // res.write(JSON.stringify(result));
    // res.end();//发送
    res.send(result);
    // console.log(result);
  })
});
router.get('/infinite_right', function(req, res, next) {
  var sql="SELECT * FROM wz_sidebar_right WHERE family_id=2";
  pool.query(sql,[],(err,result)=>{
    if(err)throw err;
    // res.writeHead(200,{
    //   "Access-Control-Allow-Origin":"*"
    // });
    // res.write(JSON.stringify(result));
    // res.end();//发送
    res.send(result);
    // console.log(result);
  })
});
router.get('/html5', function(req, res, next) {
  var sql="SELECT * FROM wz_index_product WHERE family_id=3";
  pool.query(sql,[],(err,result)=>{
    if(err)throw err;
    // res.writeHead(200,{
    //   "Access-Control-Allow-Origin":"*"
    // });
    // res.write(JSON.stringify(result));
    // res.end();//发送
    res.send(result);
    // console.log(result);
  })
});
router.get('/html5_right', function(req, res, next) {
  var sql="SELECT * FROM wz_sidebar_right WHERE family_id=3";
  pool.query(sql,[],(err,result)=>{
    if(err)throw err;
    // res.writeHead(200,{
    //   "Access-Control-Allow-Origin":"*"
    // });
    // res.write(JSON.stringify(result));
    // res.end();//发送
    res.send(result);
    // console.log(result);
  })
});
router.get('/study', function(req, res, next) {
  var sql="SELECT * FROM wz_index_product WHERE family_id=4";
  pool.query(sql,[],(err,result)=>{
    if(err)throw err;
    // res.writeHead(200,{
    //   "Access-Control-Allow-Origin":"*"
    // });
    // res.write(JSON.stringify(result));
    // res.end();//发送
    res.send(result);
    // console.log(result);
  })
});
router.get('/study_right', function(req, res, next) {
  var sql="SELECT * FROM wz_sidebar_right WHERE family_id=4";
  pool.query(sql,[],(err,result)=>{
    if(err)throw err;
    // res.writeHead(200,{
    //   "Access-Control-Allow-Origin":"*"
    // });
    // res.write(JSON.stringify(result));
    // res.end();//发送
    res.send(result);
    // console.log(result);
  })
});

module.exports = router;//