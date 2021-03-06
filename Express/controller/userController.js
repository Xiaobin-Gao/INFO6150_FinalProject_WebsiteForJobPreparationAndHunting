const User = require('../model/user');

exports.create = (req,res) => {
    const user = new User({
        userName : req.body.userName,
        password : req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        type : req.body.type
    });

    user.save().
    then(() => {
        res.send({'message':'User created successfully'});
    });
};

exports.getUser = (req,res) => {
    const data = {
        userName: req.params.userName,
        password: req.params.password
    };
    User.findOne(data,(error,user) => {
        if(!user || error){
            res.status(401).send({'message':'Invalid Username or Password'});
        }else{
            res.send({'user':user});
        }
    })
};

exports.delete = (req,res) => {
    User.findOneAndRemove(req.params.userName).
    then(user => {
        res.send({'message':'user deleted successfully'});
    }); 
};