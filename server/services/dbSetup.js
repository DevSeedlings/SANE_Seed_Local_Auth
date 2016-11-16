// APP AND CONFIG REQUIRE //
var app = require('./../index');
var db = app.get('db');
var config = require('./../config');

// ALLOW CONSOLE OUTPUT //
var allowConsolePutput = config.INITALIZE_LOG;
var log = function(input) {
	if (allowConsolePutput) {
		console.log(input);
	}
};

// INITALIZE FUNCTION //
module.exports = {
	run: function() {
		console.log('Initializing database');

		db.initalize.user_table_initalize(function(err, table) {
			if (err) return log('User table failed to create');
			else log('User table created');
		});
	}
};
