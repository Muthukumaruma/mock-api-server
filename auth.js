var express = require('express');
var router = express.Router();


var bodyParser = require("body-parser");
var jwt        = require("jsonwebtoken");
var _ = require("lodash");

 
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//EXAMPLE only, hardcoded, plain password
var users = {
	'user': {name: 'user', 'password':'user', token:''},
	'admin':{name:'admin', password: 'admin', token:'' }
}

//BEWARE: Not best pratice, this must be passed via environment variable or config file
var JWT_SECRET = process.env.JWT_SECRET || "secrect";

function createToken(id){
	return jwt.sign(id, JWT_SECRET);
}

router.post('/api/authenticate', function(req, res) {
    console.log("auth ", req.body.username);

    var user = users[req.body.username];

    if (user && user.password == req.body.password) { 
        console.log("right user name and password");

       var jwt = createToken(user.name);
       user.token = jwt;

       res.json({
            type: true,
            data: user,
            token: jwt
        }); 
    } else {
        res.json({
            type: false,
            data: "Incorrect username/password"
        });    
        console.log("incorrect username/password")
    }
})

router.use(function(req, res, next) {
    var bearerToken;
    var bearerHeader = req.headers["authorization"];
    console.log(bearerHeader);

    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        bearerToken = bearer[1];

        var matchingUser = _.find(users, function(u) { return u.token == bearerToken; });
        if (matchingUser) {
            console.log("token found");
            next();
            return;
        } else {
            res.sendStatus(403);
        }
    } else {
    	console.log("Token failed");
        res.sendStatus(403);
    }
});

module.exports = router;
