// APP //
var app = require('./../index');
var db = app.get('db');

// BCRYPT
var bcrypt = require('bcryptjs');

// HASH PASSWORD //
function hashPassword(password) {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(password, salt);
	return hash;
}

module.exports = {

	// REGISTER USER //
	register: function(req, res, next) {
		var user = req.body;

		// Hash the users password for security
		user.password = hashPassword(user.password);

		user.email = user.email.toLowerCase();

		db.user.insert([user.name, user.email, user.password], function(err, user) {
			// If err, send err
			if (err) {
				console.log('Registration error: ', err);

				return res.status(500)
					.send(err);
			}

			delete user.password;

			res.status(200)
				.send(user);
		});
	},

	// RETURN CURRENT USER //
	me: function(req, res, next) {
		// Return user
		return res.status(200)
			.send(req.user);
	},

	updateCurrent: function(req, res, next) {
		console.log('Starting update');

		var updateUser = req.body;
		updateUser.user_id = req.user.user_id;
		db.users.save(updateUser, function(err, user) {
			if (err) {
				console.log('User update error', err);

				return res.status(401)
					.send(err);
			}

			delete user.password;
			req.user = user;

			res.status(200)
				.send(user);
		});
	}
};
