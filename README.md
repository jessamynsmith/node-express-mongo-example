# node-express-mongo-example

Simple Node Express server that provides an API using data from Mongo.

View the running app on [Heroku](https://node-express-mongo-example.herokuapp.com/)

Like my work? Tip me! https://www.paypal.me/jessamynsmith


## Development

Fork on GitHub and clone your fork

    npm install

    gulp initdb  # ctrl-c once it's finished

    npm start

Browse to the API at: http://127.0.0.1:5000/api/v1/products


## Continuous Integration

### Circle CI

[Circle CI](https://circleci.com/) is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. Circle is 
configured using the `circle.yml` file. You need to sign up for Circle and enable this project, then
set up Heroku deployment from Circle. To make this work, you need to create a herokuapp and put the
name of that app in `circle.yml`.


## Deployment

Use Heroku for deployment

    heroku addons:create mongolab:sandbox
