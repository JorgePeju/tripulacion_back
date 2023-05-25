const User = require('../models/users');

/**
* Obtener un usuario de la base de datos por su email utilizando el cuerpo de la solicitud.
* @function getUserEmail
* @async
* @param {Object} req Objeto de solicitud.
* @return {Object} Usuario encontrado.
*/
const getUserEmail = async (req, res) => {

    const email = req;
 
    try {

        const user = await User.findOne({email: email});
        return user

    } catch (error) {

        return 'No se ha encontrado al usuario';
    }
};

/**
 * Crear un nuevo usuario en la base de datos que viene desde la función del registro.
 * @function createUser
 * @async
 * @param {Object} newUser Objeto con los datos del nuevo usuario.
 * @return {Object} Usuario creado que se envía al controlador del registro.
 */
const createUser = async (userFB) => {

    const newUser = new User(userFB);

    try {

        const user = await newUser.save();
        return user
        
    } catch (error) {

        return "Error al crear el usuario"
      
    }
};

/**
 * Editar un usuario de la base de datos por su ID.
 * @function editUser
 * @async
 * @param {Object} req Objeto de solicitud.
 * @param {Object} res Objeto de respuesta
 * @return {json}
 */
const editUserM = async (id, body) => {


    try {
      
        await User.findOneAndUpdate({ _id: id }, { $set: body });
        const data = await User.findOne({_id: id});
        
        return data

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al editar el usuario",
        });
    };
};

/**
 * Obtener un usuario de la base de datos por su email.
 * @function getUser
 * @async
 * @param {Object} req Objeto de solicitud.
 * @param {Object} res Objeto de respuesta
 * @return {json}
 */
const getUser = async (req, res) => {

    const id = req.params.id;
   
    try {

        const user = await User.findOne({_id: id});
        console
        return res.status(200).json({
            ok: true,
            user: user
        })

    } catch (error) {

        return 'No se ha encontrado al usuario';
    }
};



module.exports = {
    createUser,
    editUserM,
    getUserEmail,
    getUser
}