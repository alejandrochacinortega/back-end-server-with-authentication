Back end server with authentication using Express, Mongo, Passport

## info ##

This project has the following layers and and libraries:

Low-level request handling:
- HTTP Module

Routing, Server Logic:
- Express (Parse response + routing)
- Morgan ( Logging)
- BodyParser (Helps parse incoming HTTP requests)

Database:
- MongoDB (Starting data)
- Mongoose (Working with MongoDB)

Authentication:
- PassportJS (Authenticating users)
- Passport-Local (Authenticating users with a username/password
- Passport-JWT (Authenticating users with a JWT)
- Bcrypt-Node.js (Storing a users password safely)

## setup ##

Create a config.js file in the root folder and add a secret string to hold the application secret. For example:

module.exports = {
    secret: 'whateveryouwanttoadd' // secret string;
};



npm install
npm run dev