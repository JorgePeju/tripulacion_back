const { Schema, model } = require('mongoose');

const UserSchema = new Schema({

    email: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        trim: true
    },
    userlastname: {
        type: String,
    },
    ccaa:{
        type: String,
        trim: true
    },
    city:{
        type: String,
        trim: true
    },
    uid: {
        type: String,
        
    },
    date: {
        type: Date,
        default: Date.now
    },
      
});

module.exports = model('User', UserSchema)