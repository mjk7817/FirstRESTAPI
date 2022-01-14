const express = require('express');
const router = express.Router();

router.get('/restaurants',function(req,res){
    res.send({type: 'GET'});
});

router.post('/restaurants', function(req, res){
    res.send({
        type: 'POST',
        _id: req.body._id,
        address: req.body.address,
        cuisine: req.body.cuisine,
        name: req.body.name,
        restaurant_id: req.body.restaurant_id
    });
});

router.put('/restaurants/:id', function(req, res){
    res.send({type: 'PUT'});
});
router.delete('/restaurants/:id', function(req, res){
    res.send({type: 'DELETE'});
});
module.exports = router;
