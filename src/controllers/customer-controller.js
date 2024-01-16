exports.homepage = async(req, res) => {
    const locals = {
        title: 'NodeJS',
        description: 'NodeJS User Management System'
    }
    res.render('index', locals);
}