var express = require('express');
var router = express.Router();
var request = require('request');

var { API_KEY, TERM_URL } = require('../constants/index');

/* GET term info using request. */
router.get('/', function(req, res, next) {
  request({
    uri: TERM_URL,
    qs: {
      key: API_KEY
    }
  }).pipe(res);
});

module.exports = router;
