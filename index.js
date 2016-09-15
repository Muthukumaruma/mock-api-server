// server.js
var jsonServer = require('json-server')

var server = jsonServer.create()

var middlewares = jsonServer.defaults()

server.use(middlewares)


var config = require('./config');

if (config.authEnabled) {
    var auth = require("./auth");
    server.use(auth);
}
 
console.log("starting api server"); 
//middleware to generate delayed response, for promise learning
server.use(function(req, res, next){
     
    if (req.url.indexOf("/delayed") > -1) {
         
        req.url = req.url.replace("/delayed", "");

        //delay minimum 3 seconds, maximum 8 seconds

        var delay_in_seconds = Math.random() * 8; //max 8 seconds delay added by default

        if (delay_in_seconds < 3) {
            delay_in_seconds = 3;
        }

        setTimeout(function(){
            next();      
        }, delay_in_seconds * 1000);

    } else 
    next();
});

// Add this before server.use(router)

server.use(jsonServer.rewriter({
  '/api/products': '/api/products/products',
  '/api/brands': '/api/console.log("http://localhost:7070/api/products");/brands',
  '/api/cities': '/api/cities/cities',
  '/api/states': '/api/states/states',
  '/api/cart': '/api/cart/cart',
}))

var router = jsonServer.router('data/products.json')
server.use('/api/products', router)
 
var router = jsonServer.router('data/brands.json')
server.use('/api/brands', router)

var router = jsonServer.router('data/cities.json')
server.use('/api/cities', router)

var router = jsonServer.router('data/states.json')
server.use('/api/states', router)

var router = jsonServer.router('data/cart.json')
server.use('/api/cart', router)

server.listen(7070, function () {
  console.log('JSON API Server is running on port 7070')

  console.log("You have two types of end points, normal & delayed. delayed simulate slow response between 3-8 seconds ");
  
  console.log("http://localhost:7070/api/products");
  console.log("http://localhost:7070/api/brands");
  console.log("http://localhost:7070/api/cities");
  console.log("http://localhost:7070/api/states");
  console.log("http://localhost:7070/api/cart");
  
  console.log("Delayed APIs")
  
  console.log("http://localhost:7070/delayed/api/products");
  console.log("http://localhost:7070/delayed/api/brands");
  console.log("http://localhost:7070/delayed/api/cities");
  console.log("http://localhost:7070/delayed/api/states");
  console.log("http://localhost:7070/delayed/api/cart");
})