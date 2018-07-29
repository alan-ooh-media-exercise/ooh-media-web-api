# Ooh Media Coding Exercise

##Tools
The initial approach I took was to create the API was to use Sails.js as it was quite helpful for initial development.
I also found it's ORM waterline quite attractive and it's seperation of authentication policies and endpoints.
This however quickly became unweildy as testing sails apps is difficult. I commonly go to github to see how other approach it in this instance and nobody seems to test Sails, so I pivoted.
The Second implementation was created using Express + Knex + Passport and I found it much easier to approach.

## Approach
I Created 4 tables(User, ShoppingCentres, Assets, Auditlog). The Auditlog was added as the specification didn't specify that only the previous update should be used.
The testing was done at an API level as the depth of code was quite shallow.
I have provided the following ENDPOINTS:

* 'POST auth/login'
* 'GET auth/logout'
* 'GET api/auditlogs'
* 'GET/POST api/shoppingcentres'
* 'GET/POST api/assets'
* 'GET/PATCH/DELETE api/shoppingcentres/:id'
* 'GET/PATCH/DELETE api/assets/:id'
* 'GET /users/'
* 'GET /users/:id'

# Getting Started
* Ensure Postgres, node and npm are present/running on you machine and presumes your current user has authority to run sql scripts.
* Execute the following command for development db `psql -f development.sql`
* Execute the following command for testing db `psql -f test.sql`
* These can be modified and used to generate a production db also, though environmental variables are required to be set in a .env file for this. See: 'knexfile.js'
* Run the following command 'touch .env' and insert the following:
`
SECRET_KEY='{{your_key}}'
`
* Install the dependencies `npm install`
* run the knex migrations and seeds using the following commands:
    *`
knex migrate:latest --env development
`
    *`
knex seed:run --env development
`
* The following command to start the server `npm start`.
* There is an initial user set up in the seeds and the credentials for login are {username: 'user1', password: 'password1''}
* I assumed the status field was the same field we wished to use for inactive so to mark an asset inactive the status field can be patched.


# Testing
Testing was done using mocha, chai, chai_http and sinon.
The tests can be run by running `npm test` after instantiating the test db.


# Excluded
* I have excluded the nice to haves due to the delay caused by my first approach not working out. If you would like me to do a UI I don't minding adding one.