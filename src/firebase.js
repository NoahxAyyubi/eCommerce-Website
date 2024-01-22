import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDwW-2_1txA7TfaURPgWMvIR2ivLeY8Uho",
  authDomain: "challenge-8dff1.firebaseapp.com",
  projectId: "challenge-8dff1",
  storageBucket: "challenge-8dff1.appspot.com",
  messagingSenderId: "126507160628",
  appId: "1:126507160628:web:b339c4c28b4b27a7b16661",
  measurementId: "G-6Q7FT4GTE3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };