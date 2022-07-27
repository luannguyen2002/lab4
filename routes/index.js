var express = require('express');
var fs = require('fs');
var router = express.Router();
const multer  = require('multer')
// const e = require("express");
// const upload = multer({ dest: 'uploads/' });
const storage = multer.diskStorage({
    // quy định thư mục chứa file
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    // quy định tên file khi lưa trên server
    filename: function (req, file, cb) {
        var random = Math.random();
        cb(null, random + Date.now() + file.originalname);
    },
});
var upload2 = multer({
    storage: storage, limits: {
        // tùy chọn max size cho file
        fileSize: 2 * 1024
    }
}).array('avatar',5);

var upload = multer({ storage: storage,limit : {fileSize: 2 *1024 *1024}}).array('file',6);


router.post('/dangky',upload,
    function (req, res,next) {

  upload(req,res,function (err) {

      var email = req.body.email;
      var password = req.body.password;
      // var filename = req.file.originalname; //up 1 file
      var filename = req.files.length;// tong số file up lên
      console.log(password);
      console.log(filename);

      res.send('Upload file Thanh công' + email);
  })




})
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index.ejs', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/buttons.ejs', function(req, res, next) {
  res.render('buttons.ejs', { title: 'Express' });
});
router.get('/cards.ejs', function(req, res, next) {
  res.render('cards.ejs', { title: 'Express' });
});
router.get('/utilities-color.ejs', function(req, res, next) {
  res.render('utilities-color.ejs', { title: 'Express' });
});
router.get('/utilities-animation.ejs', function(req, res, next) {
  res.render('utilities-animation.ejs', { title: 'Express' });
});
router.get('/utilities-other.ejs', function(req, res, next) {
  res.render('utilities-other.ejs', { title: 'Express' });
});
router.get('/utilities-border.ejs', function(req, res, next) {
  res.render('utilities-border.ejs', { title: 'Express' });
});
router.get('/login.ejs', function(req, res, next) {
  res.render('login.ejs', { title: 'Express' });
});
router.get('/register.ejs', function(req, res, next) {
  res.render('register.ejs', { title: 'Express' });
});
router.get('/forgot-password.ejs', function(req, res, next) {
  res.render('forgot-password.ejs', { title: 'Express' });
});
router.get('/404.ejs', function(req, res, next) {
  res.render('404.ejs', { title: 'Express' });
});
router.get('/blank.ejs', function(req, res, next) {
  res.render('blank.ejs', { title: 'Express' });
});
router.get('/charts.ejs', function(req, res, next) {
  res.render('charts.ejs', { title: 'Express' });
});
router.get('/tables.ejs', function(req, res, next) {
  res.render('tables.ejs', { title: 'Express' });
});
router.get('/upload.ejs', function (req, res, next) {
    res.render('upload.ejs', {title: 'trạng thái'} );
});

router.post('/profilearray', function (req, res, next) {
    upload2(req,res,function (err) {
        if (err){
            res.render('upload', {
                title: err.message
            });
        }else {
            var email = req.body.email;
            var password = req.body.password;

          var avatar = req.files.originalname;
            var  urlAvatar = req.files.path;

            res.render('upload', {
                title: 'Upload thành công!!!!,' +
                    ' kiểm tra thư mục uploads'
                +email+''+password+''


            });




        }
    })

});
module.exports = router;
