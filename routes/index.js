var express = require('express');
const multer  = require('multer')
// const e = require("express");
// const upload = multer({ dest: 'uploads/' });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + + Math.random() + file.originalname;
    cb(null, uniqueSuffix);
  },
  // fileFilter: function (req, res, cb) {
  //   if (file.length>100){
  //     cb(null,true);
  //   }
  //   else  cb(null,false);
  // },
})

var upload = multer({ storage: storage,limits : {fileSize: 2 *1024 *1024}}).array('file',6);
var router = express.Router();

router.post('/dangky',upload,
    function (req, res,next) {

  upload(req,res,function (err) {
    if (err=null){
      res.send(err.message);
    }
    else{
      var email = req.body.email;
      var password = req.body.password;
      // var filename = req.file.originalname; //up 1 file
      var filename = req.files.length;// tong số file up lên
      console.log(password);
      console.log(filename);

      res.send('Upload file Thanh công' + email);
     }
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

module.exports = router;
