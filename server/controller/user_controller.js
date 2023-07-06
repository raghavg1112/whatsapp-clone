const mongoose = require('mongoose')
const { User } = require('../model/User')

const add_user = async (req, res) => {console.log(`hello from add`)
    const exist = User.findOne({ sub: req.body.sub });
    if (exist) {
        return res.status(200).json({ msg: `User already exists` });
    }
    const newUser = new User(req.body);
    newUser.save().then(() => {
        return res.status(200).json({ msg: `User Saved` });
    }).catch((err) => {
        return res.status(200).json({ msg: `failed to save due to ${err}` });
    })

}
const get_user = async () => {
    try {
        const user = await User.find({});
        response.status(200).json({ msg: `got users`, data: user });
    } catch (error) {
        response.status(200).json({ msg: `failed to get users` });
    }
}
module.exports = { add_user, get_user };