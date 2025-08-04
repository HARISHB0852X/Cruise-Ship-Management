const admin = require('firebase-admin')
require('dotenv').config()
// const serviceAccount = require('./keys/celestia-cruiseship-management-firebase-adminsdk-9q602-612e710736.json')

const firebaseConfig = process.env.FIREBASE_CONFIG;
if (!firebaseConfig) {
  throw new Error('FIREBASE_CONFIG environment variable is not set');
}
const serviceAccount = JSON.parse(firebaseConfig)

admin.initializeApp(
    {
        credential : admin.credential.cert(serviceAccount),
    }
)

const db = admin.firestore()
const auth = admin.auth()
// console.log(auth);

module.exports = { db, auth, admin }

{
  "name": "cruise-ship-backend",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    // ...existing dependencies...
  }
}

