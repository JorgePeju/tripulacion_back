const Entry = require('../models/entries');
/**
 * Obtener todas las entradas de la base de datos.
 * @function getEntries
 * @async
 * @param {Object} req Objeto de solicitud.
 * @param {Object} res Objeto de respuesta
 * @return {json}
 */
const getEntries = async (req, res) => {

    try {

        const entry = await Entry.find().populate('user', 'email username userlastname ccaa');

        return res.status(200).json({
            ok: true,
            data: entry
        });


    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al obtener la entrada",
        });
    }
};

/**
 * Obtener una entrada o un usuario si existe su entrada de la base de datos por su ID.
 * @function getEntry
 * @async
 * @param {Object} req Objeto de solicitud.
 * @param {Object} res Objeto de respuesta
 * @return {json}
 */
const getEntry = async (req, res) => {
    const id = req.params.id;

    try {
        let entry = await Entry.findById(id).populate('user', 'email username userlastname ccaa');

        if (!entry) {
            entry = await Entry.findOne({ user: id }).populate('user', 'email username userlastname ccaa');
        }

        if (entry) {
            return res.status(200).json({
                ok: true,
                msg: "Entrada encontrada",
                data: entry,
            });
        } else {
            return res.status(404).json({
                ok: false,
                msg: "Entrada no encontrada",
            });
        }
        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "No se ha podido acceder a la entrada",
        });
    }
};

/**
 * Obtener una entrada de la base de datos por su ID.
 * @function editEntry
 * @async
 * @param {Object} req Objeto de solicitud.
 * @param {Object} res Objeto de respuesta
 * @return {json}
 */
const editEntry = async (req, res) => {

    const id = req.params.id;
    const body = req.body;

    try {
     
        const entry = await Entry.findOneAndUpdate({user: id }, { $set: body });

        return res.status(200).json({
            ok: true,
            msg: 'Entrada actualizada.',
            entry
        });


    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al editar la entrada",
        });
    };
};

/**
 * Crear una nueva entrada en la base de datos.
 * @function createEntry
 * @async
 * @param {Object} req Objeto de solicitud.
 * @param {Object} res Objeto de respuesta
 * @return {json}
 */
const createEntry = async (req, res) => {
  
    const newEntry = new Entry(req.body);
  
    try {

        const entry = await newEntry.save();

        return res.status(201).json({
            ok: true,
            msg: 'Entrada creada.',
            entry
        });

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al crear la entrada",
        });
    }
};

/**
 * Eliminar una entrada de la base de datos por su ID.
 * @function deleteEntry
 * @async
 * @param {Object} req Objeto de solicitud.
 * @param {Object} res Objeto de respuesta
 * @return {json}
 */
const deleteEntry = async (req, res) => {

    const id = req.params.id;
 
    try {

        const entry = await Entry.findOneAndDelete({ _id: id });

        return res.status(200).json({
            ok: true,
            msg: 'Entrada eliminada correctamente.',
            entry
        });


    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'Error al borrar la entrada.'
        });
    }
};

module.exports = {
    getEntries,
    createEntry,
    editEntry,
    deleteEntry,
    getEntry
}