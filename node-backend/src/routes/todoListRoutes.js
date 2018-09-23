var express = require('express');
var router = express.Router();

//Schema

var TodoList = require('../models/TodoList')

//Get Specific
router.route('/:id').get(function (req,res){
    

    var id = req.params.id;
    console.log("inside backend GET id route: " + id);
    TodoList.findById(id, function(err,item)    {
        res.json(item);
    });
});


//Get All Items
router.route('/').get(function (req,res){
    TodoList.find(function (err, items){
        if(err){    
          console.log(err);    
        } else {    
          res.json(items);    
        }    
      });
});


router.route('/add').post(function(req,res){
        console.log("inside backend add route");
        console.log(req.body);
        var item = new TodoList(req.body);
            item.save().then(item => {res.json('Added')})
            .catch(err => {res.status(400).send("unable to save to database");});
    }
);

// Update Specific

router.route('/update/:id').post(function(req,res){
    console.log("inside backend Update id route: " + req.params.id);
    TodoList.findById(req.params.id, function(err,item){
        if (!item)
        {
            return next(new Error('Could not Load Document'));
        }
        else
        {          
            console.log("inside backend Update item route: " + item);
            console.log(req.body.desc);
            item.desc = req.body.desc;
            item.save().then(item => {
                res.json('Updated')
            })
            .catch(err => {res.status(400).send("unable to update the database");})
        }
    });
})


// Delete Specific
router.route('/delete/:id').get(function (req, res) {
    console.log("inside backend delete route");
    TodoList.deleteOne({_id: req.params.id},
        function(err, item){
            if(err) 
            {
                res.json(err);
            }
            else
            {
                res.json('Deleted');
            }
        });
    });

module.exports = router;