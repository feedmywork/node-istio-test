var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
        await axios.get(process.env.DOMAIN_APP).then((response) => {
            // console.log(response.data);
            if (response.status == '200') {
                res.status(200).send({
                    "Response Data": response.data,
                    "API": "Test Proxy",
                    "Description": "API Test Proxy Request to Anathor App"
                })
            }
            else {
                res.status(504).send({
                    "CodeResponse": response.status,
                    "Description": "API Test Proxy Request to Anathor App"
                })
            }
          }, (error) => {
            res.status(503).send({
                "Error" : error
            })
          });
  } catch (error) {
    res.status(500).send({
        "Error" : error
    })
  }
});

module.exports = router;