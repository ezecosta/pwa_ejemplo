const usersAdminModel = require("../models/usersAdminModel");
const categoriesModel = require("../models/usersAdminModel");
module.exports = {
    validate: async (req, res, next) => { //login
        console.log(req.query)
        const categories = await categoriesModel.find({});
        res.json(categories);
    },
    create: function (req, res, next) {
        console.log(req.body);
        const category = new usersAdminModel({
            name: req.body.name,
            user: req.body.user,
            password: req.body.password
        })
        usersAdmin.save();
        res.json(category);
    }
}