const { initializeApp } = require('firebase/app')
const { getAuth } = require('firebase/auth');
const  admin = require("firebase-admin");
const {firebaseConfig, serviceAccount} = require('../config/firebaseConfig')

const firebaseApp = initializeApp(firebaseConfig);
const authFb = getAuth(firebaseApp)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports= {
    authFb,
    admin 
}