import app from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBdw4q2mSOlyBQIqgmeYehKB-fEI_JjJLU",
    authDomain: "calculator-a06e2.firebaseapp.com",
    databaseURL: "https://calculator-a06e2.firebaseio.com",
    projectId: "calculator-a06e2",
    storageBucket: "calculator-a06e2.appspot.com",
    messagingSenderId: "57725969282",
    appId: "1:57725969282:web:2e036be8875bfa5fa3a59b",
    measurementId: "G-2L2LVEWQZ2"
};

// Initialize Firebase
// export class Firebase {
//     constructor() {
//         app.initializeApp(firebaseConfig);
//         this.data = app.firestore();
//     }
// }
app.initializeApp(firebaseConfig);
export const data = app.firestore();

export default data