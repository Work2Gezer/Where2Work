const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:name', function(req, res, next) {

})


module.exports = router;
