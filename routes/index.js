'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express JavaScript', "data": getData() });
});

module.exports = router;

var getData = function () {
    var data = {
        'item1': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-76.jpg',
        'item2': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-77.jpg',
        'item3': 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDZoXk_T2Olm34TahL8PPP3aLmndm4C-0c&callback=initMap'
    }
    return data;
}

