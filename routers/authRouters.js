const express = require('express');
const router = express.Router();
const {signIn, logOut, signUp, editUser, deleteUser, resetPassword}=require('../controllers/authControllers')

router.post('/login', signIn);

router.post('/register', signUp );

router.get('/logout', logOut);

router.put('/:id', editUser);

router.delete('/:id', deleteUser);

router.post('/reset', resetPassword);

module.exports = router;