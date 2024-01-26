var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//GET 방식
router.get('/api/get/map-api', function (req, res) {
  res.status(200).json({
    "message": "hello get api map-api"
  });
});


//POST 방식
router.post('/api/post/maps-api', function (req, res) {
  res.status(200).json({
    "message": "hello post api map-api"
  });
});


module.exports = router;
