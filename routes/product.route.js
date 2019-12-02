const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');
var startPage = "D:/rsoi_lab1_ci/static/html/index.html";
var hackPage = "D:/rsoi_lab1_ci/static/html/hack.html";


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

router.get('/hack', function(req, res){
	res.sendFile(startPage, function(err){
		if (err)
			return console.log('Start page error');
	})
});

router.get('/', function(req, res){
	res.type('.html');
	res.sendFile(hackPage, function(err){
		if (err)
			return console.log('Hack-page error');
	})
});


router.post('/create', product_controller.product_create);

router.get('/:id', product_controller.product_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/deletedelete', product_controller.product_delete);


module.exports = router;

