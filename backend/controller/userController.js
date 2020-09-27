'use strict'

const dbUserModels = require('../models/');

let userController = {

    createUser: function (req, res, next) {
        dbUserModels.user.create({
            name: req.body.username,
            email: req.body.email
        }).then(user => {
            console.log('ユーザーが正常に追加されました');
            res.redirect('/users');
        })
    },

    findUser: function (req, res, next) {
        dbUserModels.user.findAll({
        }).then(user => {
            console.log('ユーザーが正常に取得できました');
            console.log(user);
        })
    }
}

module.exports = userController;