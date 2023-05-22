const User = require('../models/users');

const getUserEmail = async (req, res) => {

    const email = req;
 
    try {

        const user = await User.findOne({email: email});
        return user

    } catch (error) {

        return 'No se ha encontrado al usuario';
    }
};

const createUser = async (userFB) => {

    const newUser = new User(userFB);

    try {

        const user = await newUser.save();
        return user
        
    } catch (error) {

        return "Error al crear el usuario"
      
    }
};

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

const getUser = async (req, res) => {

    const id = req.body._id;
 
    try {

        const user = await User.findOne({id: id});
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