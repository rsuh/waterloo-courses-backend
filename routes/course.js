var express = require('express');
var router = express.Router();
var request = require('request');

var { API_KEY, COURSE_URL } = require('../constants/index');

/* GET term info using request. */
router.post('/', function(req, res) {
  request({
    uri: COURSE_URL + req.body.term + '/' + req.body.subject + '/schedule.json',
    qs: {
      key: API_KEY
    }
  }).pipe(res);
});

module.exports = router;
