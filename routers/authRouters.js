const express = require('express');
const router = express.Router();
const {signIn, logOut, signUp, editUser, deleteUser, resetPassword, signInApple, signInFacebook, signInGoogle}=require('../controllers/authControllers')

router.post('/login', signIn);

router.post('/register', signUp );

router.get('/logout', logOut);

router.put('/:id', editUser);

router.delete('/:id', deleteUser);

router.post('/reset', resetPassword);

router.get('/google', signInGoogle);

router.get('/facebook', signInFacebook);

router.get('/apple', signInApple);

module.exports = router;