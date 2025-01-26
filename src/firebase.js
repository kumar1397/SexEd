// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDwzWu-axJldzbgDMKQ1IEZY4u3vjA-1YI",
//   authDomain: "love-ed.firebaseapp.com",
//   projectId: "love-ed",
//   storageBucket: "love-ed.appspot.com",
//   messagingSenderId: "839454102187",
//   appId: "1:839454102187:web:1e200d63cd45649815ddee",
//   measurementId: "G-0S4DK4SJL7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
      apiKey: "AIzaSyDwzWu-axJldzbgDMKQ1IEZY4u3vjA-1YI",
      authDomain: "love-ed.firebaseapp.com",
      projectId: "love-ed",
      storageBucket: "love-ed.appspot.com",
      messagingSenderId: "839454102187",
      appId: "1:839454102187:web:1e200d63cd45649815ddee",
      measurementId: "G-0S4DK4SJL7"
    };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };