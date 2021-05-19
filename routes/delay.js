var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:numDelay', function(req, res, next) {
  let num_delay = req.params.numDelay
  try {
    var res_time = setTimeout(() => {
      res.status(200).send({
        "API": "Test Delay",
        "Description": "API Test Delay"
      })
    }, num_delay)
  } catch (error) {
    res.status(500).send({
      "Error": error,
      "Description": "API Test Delay"
    })
  }
});

module.exports = router;
