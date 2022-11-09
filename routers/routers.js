const { getUSer, getHome, createUser, updateUser, deleteUser } = require('../Controller/user-controler');

const router = require('express').Router();


router.get('/', getHome)

router.get('/users', getUSer)

router.post('/users', createUser)

router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)

module.exports = router