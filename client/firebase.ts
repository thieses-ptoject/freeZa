// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDTL13HX6qypfbshRyR17QAoyuVh9YuaLA",
  authDomain: "freeza3-a1382.firebaseapp.com",
  projectId: "freeza3-a1382",
  storageBucket: "freeza3-a1382.appspot.com",
  messagingSenderId: "707478761353",
  appId: "1:707478761353:web:7bc74d200a3ed0ee6dbb58"
  // measurementId: "G-6MPM12XCMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
export const auth=getAuth(app)
export default app