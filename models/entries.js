const { Schema, model } = require('mongoose');

const EntrySchema = new Schema({
    
    questions:{
        question1: String,
        question2: String,
        question3: String,
        question4: String,
        question5: String,
        question6: String,
        question7: String,
        question8: String,
    },
    status:{
        sequiaMeteorologica: Boolean,
        sequiaAgricola: Boolean,
        sequiaSocioeconomica: Boolean,
        sequiaHidrologica: Boolean,
        planHidroNacional: Boolean,
        planCuencaHidro: Boolean,
        directivoMarca: Boolean,
        programaReutilizacion: Boolean,
        reutilizacion: Boolean,
        embalses: Boolean,
        suministro: Boolean,
    },
    score: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = model('Entry', EntrySchema)