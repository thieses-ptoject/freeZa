// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage} from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzffcBPmVbFg8fkKKJFxTmC1qcLJ8x98o",
  authDomain: "freeza2-88e58.firebaseapp.com",
  projectId: "freeza2-88e58",
  storageBucket: "freeza2-88e58.appspot.com",
  messagingSenderId: "4324251512",
  appId: "1:4324251512:web:4bda1dc083018e95f35a8d",
  measurementId: "G-6MPM12XCMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)

export default app