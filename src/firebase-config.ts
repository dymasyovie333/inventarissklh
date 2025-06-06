
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "ISI_DI_SINI",
  authDomain: "ISI_DI_SINI",
  projectId: "ISI_DI_SINI",
  storageBucket: "ISI_DI_SINI",
  messagingSenderId: "ISI_DI_SINI",
  appId: "ISI_DI_SINI"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
