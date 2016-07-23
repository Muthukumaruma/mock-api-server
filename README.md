To run mock-api-server:

Command line to api-server

	npm install

to run with nodemon, nodemon automatically restart server on data change

	npm install nodemon -g
	nodemon

we have below apis

1. /api/products
2. /api/brands
3. /api/cities
4. /api/states

we also have delayed resonse apis, useful for promise.all during promise workshop. Delayed api adds random 3-8 seconds delay before response.

1. /delayed/api/products
2. /delayed/api/brands
3. /delayed/api/cities
4. /delayed/api/states
