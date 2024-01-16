exports.homepage = async(req, res) => {
    const locals = {
        title: 'NodeJS',
        description: 'NodeJS User Management System'
    }
    res.render('index', locals);
}

exports.addUser = async(req, res) => {
    const locals = {
        title: 'Add New User',
        description: 'NodeJS User Management System'
    }
    res.render('user/add', locals);
}

exports.postUser = async(req, res) => {
    const locals = {
        title: 'New User added',
        description: 'NodeJS User Management System'
    }
    res.render('user/add', locals);
}