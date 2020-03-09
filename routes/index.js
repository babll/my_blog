var express = require('express');
var router = express.Router();
const pool=require('../pool.js');

/* GET home page. */
router.get('/tag', (req, res, next)=>{
  var sql="SELECT * FROM wz_index_tag";
  var uid = req.session.uid;
  // console.log(uid);
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
router.get('/index_right', function(req, res, next) {
  var sql="SELECT * FROM wz_sidebar_right";
  var uid = req.session.uid;
  // console.log(uid);
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
// SELECT * FROM wz_sidebar_right left outer join wz_laptop_family on wz_sidebar_right.family_id=wz_laptop_family.fid
router.get('/index_newest', function(req, res, next) {
  var uid = req.session.uid;
  // console.log(uid);
  var sql="SELECT * FROM wz_index_product left outer join wz_laptop_family on wz_index_product.family_id=wz_laptop_family.fid";
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
module.exports = router;
