mock-api-server is a simple JSON based API server for RESTful web service with Token based authentication used in AngularJS workshop. 

To run mock-api-server:
Clone the repository

	git clone https://github.com/nodesense/mock-api-server.git

Command line to mock-api-server

install the dependencies,we use json-api-server,
jwt web tokens, express

	npm install

to run  mock server

	node index.js
	
the server starts at http://localhost:7070

if  you want to modify the port, edit index.js source file.

we have below apis, products are taken from wikipedia smart phone page

	1. /api/products
	2. /api/brands
	3. /api/cities
	4. /api/states
	5. /api/contacts

we also have delayed resonse apis, useful for promise.all during promise workshop. Delayed api adds random 3-8 seconds delay before response.

	1. /delayed/api/products
	2. /delayed/api/brands
	3. /delayed/api/cities
	4. /delayed/api/states
	5. /delayed/api/contacts

You can enable simple token authentication by chaning config.js file, modifying authEnabled to true. We have two users with hardcoded password
	
	username: user
	password: user

	username: admin
	password: admin

	
To Authenticate with the server, the client should call below api

	POST http://localhost:7070/api/authenticate
	
	with 'username' and 'password' field, username set to user and password set to admin
	
TODO:
	1. Enable/Disable CORS for lessions
	2. Move to LokiJS
	3. Using Encrypted password for goodness 
	4. Adding user profile
	5. Adding shopping cart
	6. Adding Mobile Phone Images
	7. Upload Image

