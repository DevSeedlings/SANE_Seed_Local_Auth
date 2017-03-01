# SANE_Seed_Local_Auth
This is a fully functional basic SANE stack app seed. It has passport local, gulp, and sass capabilities. (If you dont want gulp and sass, you will need to update the index.html and index.js accordingly)

## To use this seed

### Setup
1. Clone this repo.
2. In the terminal, navigate to the project folder and run 'npm i'.
3. Create a 'config.js' file in the server folder (It is already ignored).

#### should look something like this. (Update for your use)
```javascript
module.exports = {
  PORT: 3000,
  MASSIVE_URI: 'postgres://localhost/app', //Change db name from app to whatever your db name is
  SESSION_SECRET: 'gweriwrb-erfawrg45-oasWsd', // Change your secret
  INITALIZE_LOG: true // change to false if you dont want logs on table initialization.
};
```

### Gulp setup
1. Run `npm install -g gulp` (if you have not installed it previously).
2. In a terminal window, navigate to the project folder and run `gulp`.

### Run
1. In a new terminal window, navigate to the project folder and run `nodemon`.
