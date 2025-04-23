// save as upload-data.js
const admin = require('firebase-admin');
const serviceAccount = require('./project-name-firebase-adminsdk-fbsvc-theid.json');
const facilitiesData = require('./facilities-data.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function uploadFacilities() {
  const batch = db.batch();
  
  facilitiesData.facilities.forEach((facility, index) => {
    const docRef = db.collection('facilities').doc();
    batch.set(docRef, facility);
  });
  
  try {
    await batch.commit();
    console.log('Data uploaded successfully!');
  } catch (error) {
    console.error('Error uploading data:', error);
  }
}

uploadFacilities();