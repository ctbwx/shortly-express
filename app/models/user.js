var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: false,
  // bcrypt passwords.
  signup: function(req, res) {
    db.knex('users').insert(req.body).then(() => {
      console.log('Message posted to users table.', JSON.stringify(req.body));
    });
    res.render('index');
  },
  login: function() {
    // cross reference encrypted passwords with request body passwords to authorize.
  }
});

module.exports = User;
