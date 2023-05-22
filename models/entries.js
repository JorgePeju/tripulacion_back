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
        politicasAzules: Boolean,
        sequia: Boolean,
        costeSuministro: Boolean,
        reutilizacionAgua: Boolean,
        embalses: Boolean,
    },
    score: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }

});

module.exports = model('Entry', EntrySchema)