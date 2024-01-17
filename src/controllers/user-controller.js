const User = require('../models/user-model');
const mongoose = require('mongoose');

exports.homepage = async(req, res) => {
    const messages = await req.flash('info');
    const locals = {
        title: 'NodeJS',
        description: 'NodeJS User Management System'
    }
    try {
        const users = await User.find({}).limit(20);
        res.render('index', {locals, messages, users});
    } catch (error) {
        console.log(error);
    }
}

exports.addUser = async(req, res) => {
    const locals = {
        title: 'Add New User',
        description: 'NodeJS User Management System'
    }
    res.render('user/add', locals);
}

exports.postUser = async(req, res) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        tel: req.body.tel,
        email: req.body.email,
        details: req.body.details,
    });
    try {
        await User.create(newUser);
        await req.flash("info", "New user has been added.");

        res.redirect("/");
    } catch (error) {
        console.log(error);
    } 
}