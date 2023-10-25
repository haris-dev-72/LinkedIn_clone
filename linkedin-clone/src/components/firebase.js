import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1-YfF_uQCYhqCP_aTjY_Xy02E_-dG7o0",
  authDomain: "linkedin-by-harry.firebaseapp.com",
  projectId: "linkedin-by-harry",
  storageBucket: "linkedin-by-harry.appspot.com",
  messagingSenderId: "639768223282",
  appId: "1:639768223282:web:aa5f9525e063bfe64fe62b",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
