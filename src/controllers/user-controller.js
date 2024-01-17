const User = require('../models/user-model');
const mongoose = require('mongoose');


exports.homepage = async(req, res) => {
    const messages = await req.flash('info');
    const locals = {
        title: 'NodeJS',
        description: 'NodeJS User Management System'
    }
    // pagination
    let perPage = 12;
    let page = req.query.page || 1;

    try {
        const users = await User.aggregate([{$sort: {createdAt: 1}}]).skip(perPage*page-perPage).limit(perPage).exec();
        const count = await User.countDocuments({});
        res.render('index', {locals, users, current: page, pages: Math.ceil(count/perPage), messages})
    } catch (error) {
        console.log(error);
    }
}

//CODE BEFORE ADDING PAGINATION

// exports.homepage = async(req, res) => {
//     const messages = await req.flash('info');
//     const locals = {
//         title: 'NodeJS',
//         description: 'NodeJS User Management System'
//     }
//     try {
//         const users = await User.find({}).limit(20);
//         res.render('index', {locals, messages, users});
//     } catch (error) {
//         console.log(error);
//     }
// }

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

//view user

exports.view = async(req,res) => {
    try {
        const user = await User.findOne({_id: req.params.id});
        const locals = {
            title: 'view user data',
            description: 'viewing user details'
        };
        res.render('user/view-user', {
            locals,
            user
        })
    } catch (error) {
        console.log(error);
    }
}