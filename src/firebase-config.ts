
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXBt47yyeZDXypNloLv6gsK86oREFpTV0",
  authDomain: "inventarissklh.firebaseapp.com",
  projectId: "inventarissklh",
  storageBucket: "inventarissklh.firebasestorage.app",
  messagingSenderId: "227861200621",
  appId: "1:227861200621:web:c2fdb04adce809f66dd6e4",
  measurementId: "G-MWTM5HSE4B"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
