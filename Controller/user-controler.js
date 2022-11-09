const path = require('path');
let users = require('../Model/user-profile');
const { v4: uuidv4 } = require('uuid');


exports.getHome = (req, res) => {
    res.sendFile(path.join(__dirname + "/../View/index.html"));
}

exports.getUSer = (req, res) => {
    res.status(200).json({ users });
}

exports.createUser = (req, res) => {

    const newUSer = {
        id: uuidv4(),
        name: req.body.name,
        mail: req.body.mail
    }

    users.push(newUSer)
    res.status(200).json({ users })

}

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const { name, mail } = req.body

    users.filter((user) => user.id === userId).map((newuser) => {
        newuser.name = name;
        newuser.mail = mail
    })

    res.status(200).json({ users })
}

exports.deleteUser = (req, res) => {
    const userId = req.params.id

    users = users.filter((user) => user.id !== userId)

    res.status(200).json(users)

}


