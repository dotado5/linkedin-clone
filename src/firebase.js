import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDYJ-VuTkQjWCHvqUMa_RXcEnfpk3eAd8s",
  authDomain: "linkedin-clone-89a2d.firebaseapp.com",
  projectId: "linkedin-clone-89a2d",
  storageBucket: "linkedin-clone-89a2d.appspot.com",
  messagingSenderId: "483249751493",
  appId: "1:483249751493:web:481db1b1ce84d7d5cd77ac",
  measurementId: "G-70220XT9B3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db;