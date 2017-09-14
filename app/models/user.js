var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: false,
  // bcrypt passwords.
  signup: function(req, res) {
    db.knex('users').where({username: req.body.username}).select('username')
      .then(data => {
        if (data.length === 0) {
          db.knex('users').insert(req.body).then(() => {
          });
        } else {
        }
        res.render('index');
      });
  },
  login: function() {
    // cross reference encrypted passwords with request body passwords to authorize.

  },
  getUser: function(req, res) {
    db.knex('users').where({
      username: req.body.username
    }).select('username').then(data => {
      return data[0].username;
    }).then(user => {
      req.session.user = user;
      res.end();
    });
  },

});

module.exports = User;
