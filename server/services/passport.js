// PASSPORT //
var passport = require('passport');
var LocalStrategy = require('passport-local')
	.Strategy;

// BCRYPT //
var bcrypt = require('bcryptjs');

// APP //
var app = require('./../index');
var db = app.get('db');

// VERIFY PASSWORD //
function verifyPassword(submitedPass, userPass) {
	return bcrypt.compareSync(submitedPass, userPass);
}

// RUN WHEN LOGGING IN //
passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, function(email, password, done) {
	email = email.toLowerCase();

	db.user.user_search_email([email], function(err, user) {
		user = user[0];

		// If err, return err
		if (err) done(err);

		// If no user if found, return false
		if (!user) return done(null, false);

		// If user is found, check to see if passwords match. If so, return user
		if (verifyPassword(password, user.password)) return done(null, user);

		// If no match, return false
		return done(null, false);
	});
}));

// Puts the user on the session
passport.serializeUser(function(user, done) {
	done(null, user.id);
});
passport.deserializeUser(function(id, done) {
	db.user.user_search_id([id], function(err, user) {
		done(err, user[0]);
	});
});

module.exports = passport;
