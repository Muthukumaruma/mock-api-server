mock-api-server is a simple JSON based API server for RESTful web service with Token based authentication used in AngularJS workshop. 

To run mock-api-server:
Clone the repository

	git clone https://github.com/nodesense/mock-api-server.git

Command line to mock-api-server

install the dependencies,we use json-api-server,
jwt web tokens, express

	npm install

to run with nodemon, nodemon automatically restart server on data change

	npm install nodemon -g
	nodemon

we have below apis, products are taken from wikipedia smart phone page

	1. /api/products
	2. /api/brands
	3. /api/cities
	4. /api/states

we also have delayed resonse apis, useful for promise.all during promise workshop. Delayed api adds random 3-8 seconds delay before response.

	1. /delayed/api/products
	2. /delayed/api/brands
	3. /delayed/api/cities
	4. /delayed/api/states

You can enable simple token authentication by chaning config.js file, modifying authEnabled to true. We have two users with hardcoded password
	
	username: user
	password: user

	username: admin
	password: admin

TODO:
	1. Enable/Disable CORS for lessions
	2. Move to LokiJS
	3. Using Encrypted password for goodness 
	4. Adding user profile
	5. Adding shopping cart
	6. Adding Mobile Phone Images
	7. Upload Image

