const express = require('express'), //加载express模块
      app = express(); //启动一个web服务器
var homeAdData = require('./public/ad.js')
var homeListData = require('./public/list.js')
var detail = require('./public/detail.js')
//var bodyParser = require('body-parser');
//var MongoClient = require('mongodb').MongoClient;
//var ObjectId = require('mongodb').ObjectId;
//  var url='mongodb://localhost:27017' ;
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());
app.get('/api/like',function(req,res){
        res.status(200);
        res.json(homeAdData);
})
app.get('/api/detail',function(req,res){
        res.status(200);
        res.json(detail);
})
app.get('/api/list',function(req,res){
        res.status(200);
        let data=homeListData;
        var jsonr=req.query;
        //console.log(jsonr.page);
        //if(jsonr.page>5){
          //data.hasMore=false
        //}
        //else{
            //data.hasMore=true
        //}
        res.json(data);
})
//app.get('/api/getuser',function(req,res){
  //var jsonr=req.query;
//  MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
   //var dbo = db.db("testdb");
   //if(jsonr._id){
  //    jsonr._id=ObjectId(jsonr._id)
//   }
   //dbo.collection("user"). find(jsonr).toArray(function(err, result) { // 返回集合中所有数据
    //   if (err) throw err;
    //    res.status(200);
  //      res.json(result);
    //   db.close();
//   });
//});
//})
//app.get('/saveuser',function(req,res){
  //  var jsonr=req.query;
  //  MongoClient.connect(url, function(err, db) {
  //  if (err) throw err;
  //  var dbo = db.db("testdb");
  //  var myobj = jsonr;
  //  dbo.collection("user").insertOne(myobj, function(err, result) {
    //    res.status(200);
    //    res.json({'code':'0000'});
//db.close();
  //  });
//});
//})
//app.get('/saveupdate',function(req,res){
    //var jsonr=req.query;
  //  MongoClient.connect(url, function(err, db) {
  //  if (err) throw err;
  //  var dbo = db.db("testdb");
  //  if(jsonr._id){
  //     jsonr._id=ObjectId(jsonr._id)
  //  }
  //  var myobj = jsonr;
  //  var whereStr = {"_id":jsonr._id};
  //  var updateStr = {$set: { "userName" :jsonr.userName,"age":jsonr.age,"sex":jsonr.sex}};
    //  dbo.collection("user").update(whereStr,updateStr, function(err, result) {
    //    if (err) throw err;
    //    res.status(200);
    //    res.json({'code':'0000'});
    //    db.close();
  //  });
//});
//})
//app.get('/delete',function(req,res){
    //var jsonr=req.query;
  //  MongoClient.connect(url, function(err, db) {
  //  if (err) throw err;
  //  var dbo = db.db("testdb");
  //  if(jsonr._id){
  //     jsonr._id=ObjectId(jsonr._id)
//    }
  //  var whereStr = {"_id":jsonr._id};
  //    dbo.collection("user").remove(whereStr, function(err, result) {
  //      if (err) throw err;
  //      res.status(200);
    //    res.json({'code':'0000'});
    //    db.close();
  //  });
//});
//})

//app.use(express.static(__dirname+'/public'));
//app.get('/',function(req,res){
  //  res.sendFile("/public/index.html");
//})
const server = app.listen(6969,function(){
    let port = server.address().port;
    console.log('app listening at http://%s:%s','localhost',port);
});
