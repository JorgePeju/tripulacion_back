const express = require('express');
const router = express.Router();
const {signIn, logOut, signUp, editUser, deleteUser, resetPassword, signInApple, signInFacebook, signInGoogle}=require('../controllers/authControllers')
const {getUser} = require('../controllers/userControllers')
router.post('/login', signIn);

router.post('/register', signUp );

router.get('/logout', logOut);

router.put('/:id', editUser);

router.delete('/:id', deleteUser);

router.post('/reset', resetPassword);

router.get('/user/:id', getUser);

module.exports = router;