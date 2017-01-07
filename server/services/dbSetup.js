// APP AND CONFIG REQUIRE //
var app = require('./../index');
var db = app.get('db');
var config = require('./../config');

// ALLOW CONSOLE OUTPUT //
var allowConsolePutput = config.INITIALIZE_LOG;
var log = function(input) {
	if (allowConsolePutput) {
		console.log(input);
	}
};

// INITIALIZE FUNCTION //
module.exports = {
	run: function() {
		console.log('Initializing database');

		db.initialize.tables_initialize(function(err, table) {
			if (err) return log('Some tables failed to create');
			else log('Tables successfully initialized');
		});
	}
};
