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
    try{
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

// updating user data
exports.edit = async (req, res) => {
    try{
        const user = await User.findOne({ _id: req.params.id });
    
        const locals = {
            title: "Edit User Data",
            description: "Free NodeJs User Management System",
        };

        res.render("user/edit", {
            locals,
            user,
        });
    } catch (error) {
        console.log(error);
    }
};

exports.editPost = async (req, res) => {
    try{
        await User.findByIdAndUpdate(req.params.id, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            tel: req.body.tel,
            email: req.body.email,
            details: req.body.details,
            updatedAt: Date.now(),
        });
        await res.redirect(`/edit/${req.params.id}`);
    } catch (error) {
        console.log(error);
    }
};

//delete user
exports.deleteUser = async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id });
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

//search user
exports.searchUser = async (req, res) => {
    const locals = {
        title: "Search User Data",
        description: "Free NodeJs User Management System",
    };

    try {
        let searchTerm = req.body.searchTerm;
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

        const users = await User.find({
            $or: [
                { firstName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
                { lastName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
            ],
        });

        res.render("search", {
            users,
            locals,
        });
    } catch (error) {
        console.log(error);
    }
};