const { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } = require('firebase/auth');
const { authFb } = require('../helpers/firebase')
const { admin } = require('../helpers/firebase');

const signUp = async (req, res) => {

    try {

        const { email, password } = req.body

        const userCredentials = await createUserWithEmailAndPassword(authFb, email, password)

        return res.status(200).json({
            ok: true,
            user: userCredentials.user
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
    console.log(id)

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

module.exports = {
    signIn,
    logOut,
    signUp,
    editUser,
    deleteUser
};