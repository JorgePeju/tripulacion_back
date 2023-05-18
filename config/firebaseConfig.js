const firebaseConfig = {
  apiKey: process.env.API_KEY_FIREBASE,
  authDomain: "agua-68378.firebaseapp.com",
  projectId: "agua-68378",
  storageBucket: "agua-68378.appspot.com",
  messagingSenderId: "85921444851",
  appId: process.env.APPID,
};

const serviceAccount = {
  "type": "service_account",
  "project_id": process.env.PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY,
  "client_email": process.env.CLIENT_EMAIL,
  "client_id": process.env.CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dx45g%40agua-68378.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}


module.exports = {
  firebaseConfig,
  serviceAccount
}