# sayburgh task (Movies and shows providing api)

## Api features
- This is movies and shows short information providing api, where a user can see movies, shows decriptions.
  - A normal user can Signup and login by providing actual information
  - An admin can create a new movie and Show


## Admin credentials 
  - (Please use these credentials for first admin role then you can make an admin of  a normal user from users list)

  -- email: admin@mail.com 
  -- password: 123456

  

-----------------------------------------

- API Types: RESTful API
- Design patter: MVC

-----------------------------------------

## Folder structure: 

- index.js, as usual this file run the project 
- app.js, initial packages, middlwares, routes runs this file

- authentication: In this file, JWT createToke and verify token files stored. 
- config: this folder holds configuration.js and db.connection.js files. those files is projects configaration files. 
- config file holds db url and secret key
- db.connection file holds mongodb database connectoin through mongoose

- contorollers: This folder holds all the controllers
- models: This folder holds all models or schmeas
- routes: For simplicity- all routers files are stored in this folder 

- These all folders are separated- like: in user.controller file all operation implemented. and others are like this. 


## api endpoints

 - /api/movies/ (for getting all movies)
 - /api/movies/ (POST request) (for create a new movie)
 - /api/movies/:id (for get a single movie through unique id)

 - /api/shows/ (for getting all shows)
 - /api/movies/ (POST request) (for create a movie)
 - /api/movies/:id (for get a specific single movie through unique id)

 - /api/users/ (for getting all shows)
 - /api/users/signup (for signup a new user)
 - /api/users/login (for login existing user)
 - /api/users/login (for login existing user)
 - /api/users/updaterole/:id (for update user role through unique id)



## Technologies or packages

  - Here listed some of the packages that are used for this project:

    - Node (js runtime) (LTS version- 18.16.0)
    - mongodb (database)
    - mongoose (for database schema design)
    - Express
    - cors
    - dotenv
    - jsonwebtoken (jwt)
    - cookie-parser
    - md5 (for password hashing. Althrouh this is not more secure. for more secure we can use bcrypt etc)
    - nodemon (for development easier)
    - uuidv4 (for unique id generation)
    