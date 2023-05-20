const Entry = require('../models/entries');

const getEntries = async (req, res) => {

    try {

        const entry = await Entry.find()

        // .populate('user', 'email username userlastname ccaa');

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

const editEntry = async (req, res) => {

    const id = req.params.id;
    const body = req.body;

    try {
     
        const entry = await Entry.findOneAndUpdate({ _id: id }, { $set: body });

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
}