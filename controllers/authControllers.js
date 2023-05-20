const { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider, signInWithPopup } = require('firebase/auth');
const { authFb } = require('../helpers/firebase')
const { admin } = require('../helpers/firebase');
const User = require('../models/users');
const {createUser, editUserM, getUserEmail} = require('./userControllers')

const signUp = async (req, res) => {

    try {

        const { email, password } = req.body
        const userCredentials = await createUserWithEmailAndPassword(authFb, email, password)

        const newUser = {
            email: email,
            username: username,
            userlastname: userlastname,
            ccaa: ccaa,
            uid: userCredentials.user.uid
        }
        const user =  await createUser(newUser)

        return res.status(200).json({
            ok: true,
            user: user
        })

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al crear el usuario",
            error: error.code
        });
    }
};

const signIn = async (req, res) => {

    const { email, password } = req.body

    try {

        const userCredentials = await signInWithEmailAndPassword(authFb, email, password);
        
        return res.status(200).json({
            ok: true,
            user: userCredentials.user
        })

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al inciar sesion",
            error: error.code
        });
    }
};

const logOut = async (req, res) => {

    try {
        await signOut(authFb)

        return res.status(200).json({
            ok: true,
            mgs: 'Cerrada sesión de usuario'
        })

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al crear el usuario",
            error: error.code
        });
    }
};

const editUser = async (req, res) => {

    try {

        const uid = req.params.id;
        const body = req.body;

        const editedUser = await admin.auth().updateUser(uid, {
            email: body.email,
            password: body.password
        });

        return res.status(200).json({
            ok: true,
            user: editedUser.user,
        })

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al editar el usuario",
            error: error.code
        });
    };
};

const deleteUser = async (req, res) => {

    const id = req.params.id;

    try {

        await admin.auth().deleteUser(id)

        return res.status(200).json({
            ok: true,
            msg: 'Usuario eliminado'
        })

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'Error al borrar el usuario.',
            error: error.code
        });
    }
};

const resetPassword = async (req, res) => {
    const { email } = req.body;

    try {
        await sendPasswordResetEmail(authFb, email);

        return res.status(200).json({
            ok: true,
            msg: 'Correo de recuperación de contraseña enviado'
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al enviar el correo de recuperación de contraseña',
            error: error.code
        });
    }
};

const signInGoogle = async (req, res) => {

    const provider = new GoogleAuthProvider();

    try {

        const result = await signInWithPopup(authFb, provider);
        return res.status(200).json({
            ok: true,
            user: result.user
        })

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al iniciar sesión con Google",
            error: error.code
        });

    }
};

const signInFacebook = async (req, res) => {

    const provider = new FacebookAuthProvider();

    try {

        const result = await signInWithPopup(authFb, provider);
        return res.status(200).json({
            ok: true,
            user: result.user
        })

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al iniciar sesión con Facebook",
            error: error.code
        });
    }
};

const signInApple = async (req, res) => {

    const provider = new OAuthProvider('apple.com');

    try {

        const result = await signInWithPopup(authFb, provider);
        return res.status(200).json({
            ok: true,
            user: result.user
        })

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al iniciar sesión con Apple",
            error: error.code
        });
    }
};

module.exports = {

    signIn,
    logOut,
    signUp,
    editUser,
    deleteUser,
    resetPassword,
    signInGoogle,
    signInFacebook,
    signInApple
    
};