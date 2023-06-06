const { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} = require('firebase/auth');
const { authFb } = require('../helpers/firebase')
const { admin } = require('../helpers/firebase');
const User = require('../models/users');
const { createUser, editUserM, getUserEmail } = require('./userControllers')

/**
 * Registrar un nuevo usuario y almacenarlo en la base de datos.
 * @function signUp
 * @async
 * @param {Object} req Objeto de solicitud.
 * @param {Object} res Objeto de respuesta
 * @return {json}
 */
const signUp = async (req, res) => {

    try {

        const { email, password, username, ccaa, userlastname } = req.body
        const userCredentials = await createUserWithEmailAndPassword(authFb, email, password)

        const newUser = {
            email: email,
            username: username,
            userlastname: userlastname,
            ccaa: ccaa,
            uid: userCredentials.user.uid
        }
        console.log(newUser)
        const user = await createUser(newUser)

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

/**
 * Iniciar sesión con un usuario 
 * @function signIn
 * @async
 * @param {Object} req Objeto de solicitud.
 * @param {Object} res Objeto de respuesta
 * @return {json} mensaje de respuesta y objetos
 */
const signIn = async (req, res) => {

    const { email, password } = req.body

    try {

        await signInWithEmailAndPassword(authFb, email, password);
        const user = await getUserEmail(email)

        return res.status(200).json({
            ok: true,
            user: user
        })

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al inciar sesion",
            error: error.code
        });
    }
};

/**
 * Cerrar sesión del usuario actual.
 * @function logOut
 * @async
 * @param {Object} req Objeto de solicitud.
 * @param {Object} res Objeto de respuesta
 * @return {json} 
 */
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

/**
 * Editar la información de un usuario en la base de datos y en firebase.
 * @function editUser
 * @async
 * @param {Object} req Objeto de solicitud.
 * @param {Object} res Objeto de respuesta
 * @return {json} Mensaje de respuesta y datos del usuario
 */
const editUser = async (req, res) => {
  
    try {

        const id = req.params.id;
        const body = req.body;
     
        const user = await editUserM(id, body)
        await admin.auth().updateUser(user.uid, {
            email: body.email,
            password: body.password
        });
      
        return res.status(200).json({
            ok: true,
            user: user
        })

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al editar el usuario",
            error: error
        });
    };
};

/**
 * Eliminar un usuario de la base de datos y firebase.
 * @function deleteUser
 * @async
 * @param {Object} req Objeto de solicitud.
 * @param {Object} res Objeto de respuesta
 * @return {json} Mensaje de respuesta y datos del usuario eliminado
 */
const deleteUser = async (req, res) => {

    const id = req.params.id;

    try {

        const user = await User.findOneAndDelete({ _id: id });
        await admin.auth().deleteUser(user.uid)

        return res.status(200).json({
            ok:true,
            msg: 'Usuario eliminado correctamente',
            user
        })

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'Error al borrar el usuario.',
            error: error.code
        });
    }
};

/**
 * Reiniciar la contraseña de un usuario.
 * @function resetPassword
 * @async
 * @param {Object} req Objeto de solicitud.
 * @param {Object} res Objeto de respuesta
 * @return {json} Mensaje de respuesta
 */
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



module.exports = {

    signIn,
    logOut,
    signUp,
    editUser,
    deleteUser,
    resetPassword

};
