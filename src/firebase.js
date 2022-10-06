import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC4L9JxU08cAlRitMDC5-KF4vTc2tgFrtA",
    authDomain: "netflix-clone-2c60a.firebaseapp.com",
    projectId: "netflix-clone-2c60a",
    storageBucket: "netflix-clone-2c60a.appspot.com",
    messagingSenderId: "908696612206",
    appId: "1:908696612206:web:6a4fa6a0130144531a257f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;