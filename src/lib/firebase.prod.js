import Firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';

//we need to show something
const config = {
                    apiKey: "AIzaSyC1A8ab6s8Ay3jDaTQAI3W1lY7OGxZ5ojU",
                    authDomain: "netflix-clone-app-eef83.firebaseapp.com",
                    projectId: "netflix-clone-app-eef83",
                    storageBucket: "netflix-clone-app-eef83.appspot.com",
                    messagingSenderId: "810608121960",
                    appId: "1:810608121960:web:933cee0bd9c3aa96ee83dd"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };