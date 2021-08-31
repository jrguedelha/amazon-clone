import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC-9BOCN8OD1SJCrHqc_VKmNQd80b7sFW8",
  authDomain: "amz-clone-medium-42305.firebaseapp.com",
  projectId: "amz-clone-medium-42305",
  storageBucket: "amz-clone-medium-42305.appspot.com",
  messagingSenderId: "898631127165",
  appId: "1:898631127165:web:53a553cdb402b596f8e114",
  measurementId: "G-CH22VG5NP7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firebase;
const auth = firebase.auth();

export { db, auth };