const User = require('../models/users');

const getUserEmail = async (req, res) => {

    const email = req;
    console.log(email)
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

const editUserM = async (req, res) => {

    const id = req.params.id;
    const body = req.body;
 
    try {
        
        await User.findOneAndUpdate({ _id: id }, { $set: body });
        const data = await User.findOne({_id: id});
      
        return res.status(200).json({
            ok:true,
            data,  
        }) 

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al editar el usuario",
        });
    };
};



module.exports = {
    createUser,
    editUserM,
    getUserEmail
}