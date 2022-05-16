import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyCYcj9dKNPmJfNIU6_ykb2AMWj-8_-FUME",
//     authDomain: "linkedin-clone-3f57c.firebaseapp.com",
//     projectId: "linkedin-clone-3f57c",
//     storageBucket: "linkedin-clone-3f57c.appspot.com",
//     messagingSenderId: "423216815785",
//     appId: "1:423216815785:web:518368fe34b8706672d3b8",
//     measurementId: "G-QTXK7J9DRC"
// }

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCYcj9dKNPmJfNIU6_ykb2AMWj-8_-FUME",
    authDomain: "linkedin-clone-3f57c.firebaseapp.com",
    projectId: "linkedin-clone-3f57c",
    storageBucket: "linkedin-clone-3f57c.appspot.com",
    messagingSenderId: "423216815785",
    appId: "1:423216815785:web:518368fe34b8706672d3b8",
    measurementId: "G-QTXK7J9DRC"
})

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };

