var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: false,
  signup: function(req, res) {
    db.knex('users').insert(req.body).then(() => {
      console.log('Message posted to users table.', JSON.stringify(req.body));
    });
    res.render('index');
  },
});

module.exports = User;
