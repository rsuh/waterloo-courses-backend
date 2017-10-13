var express = require('express');
var router = express.Router();
var request = require('request');

var { API_KEY, SUBJECTS_URL } = require('../constants/index');

/* GET subjet info using request. */
router.get('/', function(req, res, next) {
  request({
    uri: SUBJECTS_URL,
    qs: {
      key: API_KEY
    }
  }).pipe(res);
});

module.exports = router;
